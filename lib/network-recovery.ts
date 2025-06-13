/**
 * Network recovery utilities for handling connection timeouts and failures
 */

export interface RetryOptions {
  maxRetries?: number;
  initialDelay?: number;
  maxDelay?: number;
  backoffFactor?: number;
  shouldRetry?: (error: Error) => boolean;
}

const DEFAULT_RETRY_OPTIONS: Required<RetryOptions> = {
  maxRetries: 3,
  initialDelay: 1000,
  maxDelay: 10000,
  backoffFactor: 2,
  shouldRetry: (error: Error) => {
    // Retry on network errors, timeouts, and DNS failures
    return (
      error.message.includes('ENOTFOUND') ||
      error.message.includes('ETIMEDOUT') ||
      error.message.includes('ECONNRESET') ||
      error.message.includes('ECONNREFUSED') ||
      error.message.includes('fetch failed') ||
      error.message.includes('Connect Timeout Error')
    );
  },
};

/**
 * Retry a function with exponential backoff
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const opts = { ...DEFAULT_RETRY_OPTIONS, ...options };
  let lastError: Error | undefined;
  
  for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      // Don't retry if this is the last attempt or error shouldn't be retried
      if (attempt === opts.maxRetries || !opts.shouldRetry(lastError)) {
        throw lastError;
      }
      
      // Calculate delay with exponential backoff
      const delay = Math.min(
        opts.initialDelay * Math.pow(opts.backoffFactor, attempt),
        opts.maxDelay
      );
      
      console.warn(
        `Attempt ${attempt + 1}/${opts.maxRetries + 1} failed: ${lastError.message}. Retrying in ${delay}ms...`
      );
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  // This should never happen given the logic above, but provides a fallback
  throw lastError || new Error('All retry attempts failed with unknown error');
}

/**
 * Create a timeout wrapper for promises
 */
export function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  timeoutMessage = 'Operation timed out'
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs);
    })
  ]);
}

/**
 * Enhanced fetch with retry and timeout
 */
export async function robustFetch(
  url: string,
  options: RequestInit = {},
  retryOptions: RetryOptions = {},
  timeoutMs = 30000
): Promise<Response> {
  return withRetry(
    () => withTimeout(
      fetch(url, {
        ...options,
        signal: AbortSignal.timeout(timeoutMs),
      }),
      timeoutMs,
      `Request to ${url} timed out after ${timeoutMs}ms`
    ),
    retryOptions
  );
}

/**
 * Check if the current error is a network-related error
 */
export function isNetworkError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  
  return (
    error.message.includes('ENOTFOUND') ||
    error.message.includes('ETIMEDOUT') ||
    error.message.includes('ECONNRESET') ||
    error.message.includes('ECONNREFUSED') ||
    error.message.includes('fetch failed') ||
    error.message.includes('Connect Timeout Error') ||
    error.message.includes('Network Error') ||
    error.message.includes('ERR_NETWORK')
  );
}

/**
 * Create a fallback data provider for when network requests fail
 */
export function withFallback<T>(
  primaryFn: () => Promise<T>,
  fallbackData: T,
  retryOptions?: RetryOptions
): Promise<T> {
  return withRetry(primaryFn, retryOptions).catch((error) => {
    console.warn('Primary data source failed, using fallback:', error.message);
    return fallbackData;
  });
}


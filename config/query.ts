import { QueryClient } from '@tanstack/react-query'

const queryClient = (() => {
    let instance: QueryClient | null = null;
    return () => {
        if (!instance) {
            instance = new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        refetchOnMount: false,
                        retry: 1,
                        staleTime: 1000 * 60 * 5,
                    },
                },
            });
        }
        return instance;
    };
})();

export default queryClient();

"use client";

import query from "@/config/query";
import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={query}>
      <>{children}</>
    </QueryClientProvider>
  );
}

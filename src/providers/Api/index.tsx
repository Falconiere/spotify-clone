import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
export function ApiProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

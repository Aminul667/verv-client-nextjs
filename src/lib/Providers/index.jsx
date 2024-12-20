"use client";

import UserProvider from "@/context/user.provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";

// import UserProvider from "@/src/context/user.provider";

const queryClient = new QueryClient();

export function Providers({ children }) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster position="top-center" />
        {children}
      </UserProvider>
    </QueryClientProvider>
  );
}

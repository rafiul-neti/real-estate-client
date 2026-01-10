import "@smastrom/react-rating/style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SmoothScrollProvider from "./Components/SmoothScrollProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SmoothScrollProvider>
          <RouterProvider router={router} />
        </SmoothScrollProvider>
      </AuthContextProvider>
      <Toaster toastOptions={{ duration: 5000 }} position="bottom-center" />
    </QueryClientProvider>
  </StrictMode>
);

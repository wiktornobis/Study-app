import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ToggleColorMode from '@/ts/theme/ToggleColorMode.tsx';

const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },  // 5 minutes cache api
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ToggleColorMode>
                <App />
            </ToggleColorMode>
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
);

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header.js";
import Search from "./components/search.js";
import SearchResults from "./components/searchResults.js";
import AppContext from "./appContext.js";

import "./app.css";

export default function App() {
  const [globalState, setGlobalState] = useState({
    query: "",
    startYear: "",
    endYear: "",
  });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <main>
          <QueryClientProvider client={queryClient}>
            <Search />
            {globalState.query && <SearchResults />}
          </QueryClientProvider>
        </main>
      ),
    },
    {
      path: "/collection",
      element: <div>Hello</div>,
    },
  ]);

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <Header />
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header.js";
import Search from "./components/search.js";
import SearchResults from "./components/searchResults.js";
import CollectionExplorer from "./components/collectionExplorer.js";
import AppContext from "./appContext.js";

import "./app.css";

export default function App() {
  const [globalState, setGlobalState] = useState({
    query: "",
    startYear: "",
    endYear: "",
    page: 1,
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
          <Search />
          {globalState.query && <SearchResults />}
        </main>
      ),
    },
    {
      path: "/collection",
      element: (
        <main>
          <CollectionExplorer />
        </main>
      ),
    },
  ]);

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <Header />

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

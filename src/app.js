import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/header.js";
import Search from "./components/search.js";
import SearchResults from "./components/searchResults.js";
import AppContext from "./appContext.js";

import "./app.css";

export default function App() {
  const [globalState, setGlobalState] = useState({
    search: "",
    startYear: "",
    endYear: "",
  });
  const queryClient = new QueryClient();

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <QueryClientProvider client={queryClient}>
        <Header />

        <main>
          <Search />
          {globalState.search && <SearchResults />}
        </main>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

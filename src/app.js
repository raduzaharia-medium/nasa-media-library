import { useState } from "react";

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

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <Header />

      <main>
        <Search />
        <SearchResults />
      </main>
    </AppContext.Provider>
  );
}

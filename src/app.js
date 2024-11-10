import Header from "./components/header.js";
import Search from "./components/search.js";
import SearchResults from "./components/searchResults.js";

import "./app.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Search />
        <SearchResults />
      </main>
    </>
  );
}

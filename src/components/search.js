import { useContext, useState } from "react";
import AppContext from "../appContext.js";

import "./search.css";

export default function Search() {
  const [globalState, setGlobalState] = useContext(AppContext);

  const [query, setQuery] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const doSearch = (e) => {
    e.preventDefault();
    setGlobalState({ ...globalState, query: query, startYear: startYear, endYear: endYear });
  };

  return (
    <form className="search" onSubmit={(e) => doSearch(e)}>
      <input placeholder="Search..." className="main" value={query} onChange={(e) => setQuery(e.target.value)} />

      <p>
        <label className="main">Search for images between</label>

        <input type="number" placeholder="year start" value={startYear} onChange={(e) => setStartYear(e.target.value)} />
        <label className="optional">and</label>
        <input type="number" placeholder="year end" value={endYear} onChange={(e) => setEndYear(e.target.value)} />
      </p>

      <button type="submit">Search</button>
    </form>
  );
}

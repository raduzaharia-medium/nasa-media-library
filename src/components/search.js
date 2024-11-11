import { useContext, useState } from "react";
import AppContext from "../appContext.js";

import "./search.css";

export default function Search() {
  const [globalState, setGlobalState] = useContext(AppContext);

  const [query, setQuery] = useState(globalState.query);
  const [startYear, setStartYear] = useState(globalState.startYear);
  const [endYear, setEndYear] = useState(globalState.endYear);

  const doSearch = (e) => {
    e.preventDefault();
    setGlobalState({ ...globalState, query: query, startYear: startYear, endYear: endYear });
  };

  return (
    <form className="search" onSubmit={(e) => doSearch(e)}>
      <input placeholder="Search..." className="main" required value={query} onChange={(e) => setQuery(e.target.value)} />

      <p>
        <label className="main">Search for images between</label>

        <input type="number" placeholder="year" min="1900" max="9999" value={startYear} onChange={(e) => setStartYear(e.target.value)} />
        <label className="optional">and</label>
        <input type="number" placeholder="year" min="1900" max="9999" value={endYear} onChange={(e) => setEndYear(e.target.value)} />
      </p>

      <button type="submit">Search</button>
    </form>
  );
}

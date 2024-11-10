import { useContext } from "react";

import AppContext from "../appContext";
import "./searchResults.css";

export default function SearchResults() {
  const [globalState, setGlobalState] = useContext(AppContext);

  console.log(globalState);

  return (
    <section className="search-results">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </section>
  );
}

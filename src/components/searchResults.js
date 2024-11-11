import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import AppContext from "../appContext";
import { getMediaItems } from "../services/nasaMediaLibrary";

import "./searchResults.css";

export default function SearchResults() {
  const [globalState, setGlobalState] = useContext(AppContext);
  const [page, setPage] = useState(1);
  const { isPending, error, data } = useQuery({
    queryKey: ["mediaSearch", globalState.query, globalState.startYear, globalState.endYear, page],
    queryFn: async () => await getMediaItems(globalState.query, globalState.startYear, globalState.endYear, page),
  });

  return (
    <section className="search-results">
      {isPending && <div className="loader"></div>}
      {error && <span className="error">An error has occured: {error.message}</span>}

      {data && (
        <>
          <div>
            {data.collection.items.map((e, index) => (
              <Link to="/collection" className="item" key={index} onClick={() => setGlobalState({ ...globalState, selection: e.data[0] })}>
                <img alt={e.data[0].title} src={e.links[0].href}></img>

                <div>
                  {e.data[0].title}
                  {e.data[0].center ? " • " + e.data[0].center : ""}
                  {e.data[0].photographer ? " • " + e.data[0].photographer : ""}
                </div>
              </Link>
            ))}
          </div>

          <nav>
            {data.collection.links.filter((e) => e.rel === "prev").length > 0 && <button onClick={() => setPage(page - 1)}>◀</button>}
            {data.collection.links.filter((e) => e.rel === "next").length > 0 && <button onClick={() => setPage(page + 1)}>▶</button>}
          </nav>
        </>
      )}
    </section>
  );
}

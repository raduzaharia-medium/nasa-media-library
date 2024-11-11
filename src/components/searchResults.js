import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import AppContext from "../appContext";
import getMediaItems from "../services/nasaMediaLibrary";

import "./searchResults.css";

export default function SearchResults() {
  const [globalState] = useContext(AppContext);
  const [page, setPage] = useState(1);
  const { isPending, error, data } = useQuery({
    queryKey: ["mediaSearch", globalState, page],
    queryFn: async () => await getMediaItems(globalState.query, globalState.startYear, globalState.endYear, page),
  });

  console.log(globalState);

  return (
    <section className="search-results">
      {isPending && <div className="loader"></div>}
      {error && <span className="error">An error has occured: {error.message}</span>}

      {data && (
        <>
          <div>
            {data.collection.items.map((e, index) => (
              <a href="https://google.com" className="item" key={index}>
                <img alt={e.data[0].title} src={e.links[0].href}></img>

                <div>
                  {e.data[0].title}
                  {e.data[0].center ? " • " + e.data[0].center : ""}
                  {e.data[0].photographer ? " • " + e.data[0].photographer : ""}
                </div>
              </a>
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

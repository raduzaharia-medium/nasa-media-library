import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import AppContext from "../appContext";
import { getMediaItems } from "../services/nasaMediaLibrary";

import "./searchResults.css";

export default function SearchResults() {
  const [globalState, setGlobalState] = useContext(AppContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["mediaSearch", globalState.query, globalState.startYear, globalState.endYear, globalState.page],
    queryFn: async () => await getMediaItems(globalState.query, globalState.startYear, globalState.endYear, globalState.page),
  });

  return (
    <section className="search-results">
      {isPending && <div className="loader"></div>}
      {error && <span className="error">An error has occured: {error.message}</span>}

      {data && (
        <>
          <div>
            {data.collection.items.map((e, index) =>
              e.data.map((item, itemIndex) => (
                <Link to="/collection" className="item" key={`${index}${itemIndex}`} onClick={() => setGlobalState({ ...globalState, selection: item })}>
                  <img alt={item.title} src={e.links[itemIndex].href}></img>

                  <div>
                    {item.title}
                    {item.center ? " • " + item.center : ""}
                    {item.photographer ? " • " + item.photographer : ""}
                  </div>
                </Link>
              ))
            )}
          </div>

          <nav>
            {data.collection.links.filter((e) => e.rel === "prev").length > 0 && (
              <button onClick={() => setGlobalState({ ...globalState, page: globalState.page - 1 })}>◀</button>
            )}
            {data.collection.links.filter((e) => e.rel === "next").length > 0 && (
              <button onClick={() => setGlobalState({ ...globalState, page: globalState.page + 1 })}>▶</button>
            )}
          </nav>
        </>
      )}
    </section>
  );
}

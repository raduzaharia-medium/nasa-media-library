import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import AppContext from "../appContext";
import getMediaItems from "../services/nasaMediaLibrary";

import "./searchResults.css";

export default function SearchResults() {
  const [globalState] = useContext(AppContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["mediaSearch", globalState],
    queryFn: async () => await getMediaItems(globalState.query, globalState.startYear, globalState.endYear),
  });

  console.log(globalState);

  return (
    <section className="search-results">
      {isPending && <div className="loader"></div>}
      {error && <span className="error">An error has occured: {error.message}</span>}

      {data &&
        data.collection.items.map((e, index) => (
          <a href="https://google.com" className="item" key={index}>
            <img alt={e.data[0].title} src={e.links[0].href}></img>
          </a>
        ))}
    </section>
  );
}

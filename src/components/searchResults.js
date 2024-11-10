import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import AppContext from "../appContext";
import getMediaItems from "../services/nasaMediaLibrary";

import "./searchResults.css";

export default function SearchResults() {
  const [globalState, setGlobalState] = useContext(AppContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["mediaSearch"],
    queryFn: async () => await getMediaItems(globalState.search),
  });

  console.log(globalState);

  return (
    <section className="search-results">
      {isPending && <div className="loader"></div>}
      {error && <span>An error has occured: {error.message}</span>}

      {data && (
        <>
          <div className="item">{data.description}</div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </>
      )}
    </section>
  );
}

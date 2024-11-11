import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import AppContext from "../appContext";

export default function CollectionExplorer() {
  const [globalState] = useContext(AppContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["collection"],
    queryFn: async () => await fetch(globalState.selection.href),
  });

  console.log(globalState.selection);

  return (
    <section className="collection-explorer">
      {isPending && <div className="loader"></div>}
      {error && <span className="error">An error has occured: {error.message}</span>}

      {data && (
        <>
          <div className="metadata">
            <p>
              <span>
                <strong>Location: </strong>
                {globalState.selection.data[0].center}
              </span>
            </p>
            <p>
              <span>
                <strong>Date: </strong>
                {globalState.selection.data[0].date_created}
              </span>
            </p>
            <p>
              <span>
                <strong>Title: </strong>
                {globalState.selection.data[0].title}
              </span>
            </p>
            <p>
              <span>
                <strong>Description: </strong>
                {globalState.selection.data[0].description}
              </span>
            </p>
            <p>
              <span>
                <strong>Keywords: </strong>
                {globalState.selection.data[0].keywords.join(", ")}
              </span>
            </p>
            <p>
              <span>
                <strong>Photographer: </strong>
                {globalState.selection.data[0].photographer}
              </span>
            </p>
          </div>
        </>
      )}
    </section>
  );
}

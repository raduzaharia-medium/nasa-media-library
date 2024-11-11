import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import { getAsset } from "../services/nasaMediaLibrary";
import AppContext from "../appContext";

import "./collectionExplorer.css";

export default function CollectionExplorer(props) {
  const [globalState] = useContext(AppContext);
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["collection", id],
    queryFn: async () => await getAsset(id),
  });

  return (
    <section className="collection-explorer">
      <div className="metadata">
        <p>
          <span>
            <strong>Location: </strong>
            {globalState.selection.center}
          </span>
        </p>
        <p>
          <span>
            <strong>Date: </strong>
            {globalState.selection.date_created}
          </span>
        </p>
        <p>
          <span>
            <strong>Title: </strong>
            {globalState.selection.title}
          </span>
        </p>
        <p>
          <span>
            <strong>Description: </strong>
            {globalState.selection.description}
          </span>
        </p>
        <p>
          <span>
            <strong>Keywords: </strong>
            {globalState.selection.keywords.join(", ")}
          </span>
        </p>

        {globalState.selection.photographer && (
          <p>
            <span>
              <strong>Photographer: </strong>
              {globalState.selection.photographer}
            </span>
          </p>
        )}
      </div>

      {isPending && <div className="loader"></div>}
      {error && <span className="error">An error has occured: {error.message}</span>}

      {data && (
        <>
          <img alt="globalState.selection.title" src={data.collection.items.filter((e) => e.href.includes("large"))[0].href} />
          <nav>
            <Link to="/">◀</Link>
          </nav>
        </>
      )}
    </section>
  );
}

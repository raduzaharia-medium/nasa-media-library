import { fireEvent, render } from "@testing-library/react";
import App from "./app";
import { getMediaItems } from "./services/nasaMediaLibrary";

jest.mock("./services/nasaMediaLibrary");

test("renders application header", () => {
  const { getByText, container } = render(<App />);
  const headerElement = container.querySelector("header");
  const spanElement = headerElement.querySelector("span");
  const imgElement = headerElement.querySelector("img");
  const applicationTitle = getByText("Media Library");

  expect(headerElement).toBeInTheDocument();
  expect(spanElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
  expect(applicationTitle).toBeInTheDocument();
});

test("renders search component", () => {
  const { getByText, container } = render(<App />);
  const searchElement = container.querySelector("form.search");
  const queryElement = searchElement.querySelector("input.main");
  const searchButton = searchElement.querySelector("button");
  const yearFilter = getByText("Search for images between");
  const searchResults = container.querySelector("section.search-results");

  expect(searchElement).toBeInTheDocument();
  expect(queryElement).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(yearFilter).toBeInTheDocument();
  expect(searchResults).not.toBeInTheDocument();
});

test("denies search for invalid query", () => {
  const { container } = render(<App />);
  const searchElement = container.querySelector("form.search");
  const queryElement = searchElement.querySelector("input.main");
  const searchButton = searchElement.querySelector("button");
  const searchResults = container.querySelector("section.search-results");

  fireEvent.change(queryElement, { target: { value: "" } });
  expect(queryElement.value).toBe("");

  fireEvent.click(searchButton);

  expect(searchResults).not.toBeInTheDocument();
});

test("denies search for invalid start range", () => {
  const { container } = render(<App />);
  const searchElement = container.querySelector("form.search");
  const queryElement = searchElement.querySelector("input.main");
  const fromElement = searchElement.querySelector("input.from");
  const searchButton = searchElement.querySelector("button");
  const searchResults = container.querySelector("section.search-results");

  fireEvent.change(queryElement, { target: { value: "orion" } });
  fireEvent.change(fromElement, { target: { value: 10 } });

  expect(queryElement.value).toBe("orion");
  expect(fromElement.value).toBe("10");

  fireEvent.click(searchButton);

  expect(searchResults).not.toBeInTheDocument();
});

test("denies search for invalid end range", () => {
  const { container } = render(<App />);
  const searchElement = container.querySelector("form.search");
  const queryElement = searchElement.querySelector("input.main");
  const toElement = searchElement.querySelector("input.to");
  const searchButton = searchElement.querySelector("button");
  const searchResults = container.querySelector("section.search-results");

  fireEvent.change(queryElement, { target: { value: "orion" } });
  fireEvent.change(toElement, { target: { value: 10 } });

  expect(queryElement.value).toBe("orion");
  expect(toElement.value).toBe("10");

  fireEvent.click(searchButton);

  expect(searchResults).not.toBeInTheDocument();
});

test("perform search", async () => {
  const { container } = render(<App />);
  const searchElement = container.querySelector("form.search");
  const queryElement = searchElement.querySelector("input.main");
  const searchButton = searchElement.querySelector("button");

  fireEvent.change(queryElement, { target: { value: "orion" } });
  expect(queryElement.value).toBe("orion");

  fireEvent.click(searchButton);

  const data = await getMediaItems("orion", "", "", 1);
  console.log(data.collection.items.length);
  expect(data.collection.items.length).toBe(10);

  const searchResults = container.querySelector("section.search-results");
  expect(searchResults).toBeInTheDocument();
});

import "./search.css";

export default function Search() {
  return (
    <section className="search">
      <input placeholder="Search..." className="main" />

      <p>
        <label class="main">Search for images between</label>

        <input type="number" placeholder="year start" />
        <label class="optional">and</label>
        <input type="number" placeholder="year end" />
      </p>

      <button>Search</button>
    </section>
  );
}

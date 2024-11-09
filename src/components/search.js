import "./search.css";

export default function Search() {
  return (
    <section className="search">
      <input placeholder="Search..." className="main" />

      <p>
        <label class="main">Search for images between</label>

        <input type="date" />
        <label class="optional">and</label>
        <input type="date" />
      </p>
    </section>
  );
}

import { useState } from "react";
import CardList from "../../components/CardList";
import "./style.css";

function Home() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="Home">
      <label htmlFor="search">Search by title or categories:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <CardList searchInput={searchInput} />
    </div>
  );
}

export default Home;

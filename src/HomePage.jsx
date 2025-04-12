import Header from "./components/Header";
import { Link } from "react-router";
import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

export function HomePage() {
  const [result, setResults] = useState([]);

  return (
    <div>
      <Header />
      <div className="HomePage">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={result} />
          <p>
            <Link to="/">Вернуться на страницу входа</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

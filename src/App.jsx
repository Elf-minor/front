import Header from "./components/Header";

import { useState } from "react";
import './App.css';
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import ProductSearch from './components/ProductSearch';

function App() {
  const [result, setResults] = useState([]);

  return (
    <div>
      <Header />
      <div className='App'>
        <div className='search-bar-container'>
          <SearchBar setResults={setResults} />
          <SearchResultsList results={result}/>
          <div className="min-h-screen bg-gray-100 p-4">
            <ProductSearch />
          </div>
        </div>
      </div>
     </div>
  )
}

export default App


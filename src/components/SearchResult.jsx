import React from "react";
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert("Вы выбрали товар: ${result.name}")}
    >
      <div className="product-image-container">
        {result.imageUrl && (
          <img
            src={result.imageUrl}
            alt={result.name}
            className="product-image"
          />
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{result.name}</h3>
        <div className="product-details">
          <span className="product-price">Цена:
            { `${result.price} ₽`}
          </span>
        </div>
        {result.article && (
          <div className="product-article">Артикул: {result.article}</div>
        )}
      </div>
    </div>
  );
};

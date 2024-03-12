"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function SearchResults({ searchText, movies }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  console.log(searchText);
  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const filterMovies = (filter) => {
    let sortedMovies = [];
    switch (filter) {
      case "release_date":
        sortedMovies = [...movies].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        break;
      case "popularity":
        sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
        break;
      case "vote_average":
        sortedMovies = [...movies].sort(
          (a, b) => b.vote_average - a.vote_average
        );
        break;

      default:
        break;
    }
    setFilteredMovies(sortedMovies);
  };

  return (
    <div>
      <div className="d-flex justify-content-between my-3 mx-3">
        <h1> En iyi Arama Sonuçları &quot;{searchText}&quot;</h1>
        <div className="col-2">
          <select
            onChange={(e) => filterMovies(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option> Göre Sırala</option>
            <option value="release_date">Çıkış Tarihine </option>
            <option value="popularity"> Popülerliğe</option>
            <option value="vote_average">Reytinglere</option>
          </select>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-3"></div>
      {filteredMovies.map((movie) => {
        return <Card key={movie.id} movie={movie}></Card>;
      })}
    </div>
  );
}

export default SearchResults;

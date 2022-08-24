import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const { watchList, Page, setPage, movieList, addMovie, removeMovie } = props;

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        watchList={watchList}
        key = {index}
      />
    );
  });

  const decrement = () => {
    setPage(Page-1)
  }

  const increment = () => {
    setPage(Page+1)
  }

  return (
    <div className="page">
      <h1>Isha's Movie Theatre</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container">
        <button onClick={() => Page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;

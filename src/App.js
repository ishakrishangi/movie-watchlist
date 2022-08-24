import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";
import "./App.css";
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);


  const addMovie = (movie) => {
    setWatchList([...watchList, movie])
  };

  const removeMovie = (movie) => {
    const newState = watchList.filter((mov) => {
      return mov !== movie;
    });
    setWatchList(newState);
  }


  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };


  useEffect(() => {
    getData();
  }, [page]);

 

  return (
    <React.Fragment>
      <Header />
      <main>
        <MovieScreen 
          addMovie = {addMovie}
          watchList={watchList}
          Page={page}
          setPage = {setPage}
          movieList={movieList}
          removeMovie={removeMovie}
          />
        <Watchlist
         watchList={watchList}
         removeMovie ={removeMovie}
         />
      </main>
    </React.Fragment>
  );
}

export default App;

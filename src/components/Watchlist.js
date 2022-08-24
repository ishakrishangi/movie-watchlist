import React from 'react'
import MovieCard from './MovieCard'

const Watchlist = (props) => {
  const {watchList, removeMovie} = props
  const movieDisplay = watchList.map((movie, index) => {
    return <MovieCard movie = {movie}  removeMovie = {removeMovie} watchList = {watchList} key = {index}/>;
  })

  return (
    <div className='watchlist' >
      <h1>My Watchlist</h1>
      <div className='movie-container'>{movieDisplay}</div>
    </div>
  )
}

export default Watchlist
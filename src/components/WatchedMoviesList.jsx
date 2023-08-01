import React, { useContext } from 'react'
import PopContext from '../context/PopContext'
import WatchedMovie from './WatchedMovie'

const WatchedMoviesList = () => {
  const {watched} = useContext(PopContext)
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList
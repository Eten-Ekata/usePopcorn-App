import React, { useContext, useEffect } from 'react'
import PopContext from '../context/PopContext'
import Loader from './Loader'
import Movie from './Movie'
import ErrorMessage from './ErrorMessage'

const MovieList = () => {
    const{movies, error, isLoading} = useContext(PopContext)

if (isLoading) return <Loader />
if(error) return <ErrorMessage/>
return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList
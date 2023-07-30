import React, { useContext, useEffect } from 'react'
import PopContext from '../context/PopContext'
import Loader from './Loader'
import Movie from './Movie'

const MovieList = () => {
    const{movies, setMovies, error, isLoading, query} = useContext(PopContext)

//   const KEY = '687f849f';

// useEffect(() => {
//   const trial = async() =>{
//     const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
//     const data = await res.json();
//     console.log(data)
//   }

//   trial()
// }, [query])


if (isLoading) return <Loader />
return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList
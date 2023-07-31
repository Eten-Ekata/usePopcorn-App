import React, { useContext, useEffect } from 'react'
import PopContext from '../context/PopContext'
import Loader from './Loader'

const MovieDetails = () => {
    const{selectedId,handleCloseMovie,handleAddWatched, watched, movie, setMovie, loading, setLoading,
        title,
        year,
        poster,
        runtime,
        imdbRating,
        plot,
        released,
        actors,
        director,
        genre} = useContext(PopContext)
    
    return (
    <div className='details'>
          {loading ? (
        <Loader />
      ) : (
        <header>
         <button className="btn-back" onClick={handleCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>

        </header>



      )
      
      
      
      }




    </div>
  )
}

export default MovieDetails
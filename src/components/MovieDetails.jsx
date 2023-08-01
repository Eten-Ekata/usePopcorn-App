import React, { useContext, useEffect } from 'react'
import PopContext from '../context/PopContext'
import Loader from './Loader'
import StarRating from './StarRating'

const MovieDetails = () => {
    const{selectedId, userRating, setUserRating, handleAdd, handleCloseMovie,handleAddWatched, watched, movie, setMovie, loading, setLoading,
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
    
        const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
        const watchedUserRating = watched.find(
          (movie) => movie.imdbID === selectedId
        )?.userRating;

        const isTop = imdbRating > 8;
  // console.log(isTop);

    return (
    <div className='details'>
          {loading ? (
        <Loader />
      ) : (
        <>
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
        <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>

        </>


      )
      
      
      
      }




    </div>
  )
}

export default MovieDetails
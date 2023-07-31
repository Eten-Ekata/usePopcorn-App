import React, { useContext } from 'react'
import PopContext from '../context/PopContext'

const MovieDetails = () => {
    const{selectedId,handleCloseMovie,handleAddWatched, watched} = useContext(PopContext)
  
    return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails
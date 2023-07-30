import React, { useContext } from 'react'
import PopContext from '../context/PopContext'
import Loader from './Loader'

const MovieList = () => {
    const{movies, handleSelectMovie, error, isLoading} = useContext(PopContext)
if (isLoading) return <Loader />
    return (
    <div>MovieListssssss</div>
  )
}

export default MovieList
import React, {useContext} from 'react'
import PopContext from '../context/PopContext'

const NumResults = () => {
  const{movies, setMovies} = useContext(PopContext)
  return (
    <div>NumResults: {movies}</div>
  )
}

export default NumResults
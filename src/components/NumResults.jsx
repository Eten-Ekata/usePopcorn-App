import React, {useContext} from 'react'
import PopContext from '../context/PopContext'

const NumResults = () => {
  const{movies, setMovies} = useContext(PopContext)
  return (
    <p className="num-results">
    Found <strong>eten</strong> results
  </p>
  )
}

export default NumResults
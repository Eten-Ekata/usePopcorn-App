import React, {useContext} from 'react'
import PopContext from '../context/PopContext'

const Search = () => {
  const{query, setQuery} = useContext(PopContext)
  return (
    <div>Search: {query}</div>
  )
}

export default Search
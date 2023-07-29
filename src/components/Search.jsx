import React, {useContext, useRef} from 'react'
import PopContext from '../context/PopContext'

const Search = () => {
  const{query, setQuery} = useContext(PopContext)
  // const inputEl = useRef(null);

  // useKey("Enter", function () {
  //   if (document.activeElement === inputEl.current) return;
  //   inputEl.current.focus();
  //   setQuery("");
  // });
  return (
    <input
    className="search"
    type="text"
    placeholder="Search movies..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    //ref={inputEl}
  />
  )
}

export default Search
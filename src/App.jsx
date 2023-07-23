import { useState } from 'react'
import './index.css'

function App() {

  return (
    <>
       <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
    </>
  )
}

export default App

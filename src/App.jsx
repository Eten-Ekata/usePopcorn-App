import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import NumResults from './components/NumResults'
import Main from './components/Main'
import Box from './components/Box'
import MovieList from './components/MovieList'

const App = ()=>{

  return (
    <>
       <Navbar>
        <Search />
        <NumResults/>
      </Navbar>
      <Main>
        <Box>
      <MovieList />
        </Box>
      </Main>
    </>
  )
}

export default App

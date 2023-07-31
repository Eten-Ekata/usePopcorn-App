import { useContext, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import NumResults from './components/NumResults'
import Main from './components/Main'
import Box from './components/Box'
import MovieList from './components/MovieList'
import PopContext from './context/PopContext'
import MovieDetails from './components/MovieDetails'
import WatchedSummary from './components/WatchedSummary'
import WatchedMoviesList from './components/WatchedMoviesList'

const App = ()=>{
  const{ selectedId} = useContext(PopContext)
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
        <Box>
          {!selectedId ? (<MovieDetails/>)  
          : (
          <>
          <WatchedSummary/>
          <WatchedMoviesList/>
          </>
)}
        </Box>
      </Main>
    </>
  )
}

export default App

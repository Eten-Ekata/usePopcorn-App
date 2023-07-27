import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import NumResults from './components/NumResults'

function App() {

  return (
    <>
       <Navbar>
        <Search />
        <NumResults/>
      </Navbar>
    </>
  )
}

export default App

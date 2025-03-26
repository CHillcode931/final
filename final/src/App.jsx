import { useState, useEffect } from 'react'
import { getProductList } from './components/utils/api'
import { Home } from './components/home'
import {NavBar} from './components/NavBar'
const App= ()=> {
  

  return (
    <>
     <NavBar/>
     <Home/>
      </>
  )
}

export default App

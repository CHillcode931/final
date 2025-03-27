import { useState, useEffect } from 'react'
import { getProductList } from './components/utils/api'
import { Home } from './components/home'

import {Details} from'./components/Details'
import {Nav} from'./components/Nav'
const App= ()=> {
  

  return (
    <>
    <Nav/>
     
     <Home/>

      </>
  )
}

export default App

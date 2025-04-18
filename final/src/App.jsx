
import { Home } from './components/home'
import {Nav} from'./components/Nav'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Details } from './components/Details'

import {About}from './components/About'
import {Contact}from './components/Contact'
import { Cart } from './components/CartPage'
import { CheckoutPage } from './components/CeckOut'
const App= ()=> {
  

  return (
    <>
    {/* browser routes and thier paths wrapped by browser router */}
     <BrowserRouter>
    <Nav/>
      <Routes>
        {/* <Route element={<App />}> */}
          <Route element={<Home />} path="/" />
          <Route element={<Cart/>}path='Cart'/>
          <Route element={<Details />} path="details/:id" />
          <Route element={<About/>} path="About"/>
          <Route element= {<Contact/>} path= "Contact"/>
          <Route element={<CheckoutPage/>}path="Checkout"/>      
      </Routes>
     
     


    </BrowserRouter>
  </>  
  )

}

export default App

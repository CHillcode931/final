
import { Home } from './components/home'
import {Nav} from'./components/Nav'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Details } from './components/Details'
const App= ()=> {
  

  return (
    <>
     <BrowserRouter>
    <Nav/>
      <Routes>
        {/* <Route element={<App />}> */}
          <Route element={<Home />} path="/" />

          <Route element={<Details />} path="details/:id" />
        {/* </Route> */}
      </Routes>
     
     
      {/* <Home/> */}

    </BrowserRouter>
  </>  
  )

}

export default App

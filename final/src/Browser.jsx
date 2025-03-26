import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/Home'
const app=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/'/>
        </Routes>
        </BrowserRouter>
    )}
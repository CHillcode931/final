import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/home'
const app=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/#home'/>
        </Routes>
        </BrowserRouter>
    )}
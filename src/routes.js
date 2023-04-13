import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Headers from './components/Header/Headers';
import Footer from './components/Footer/Footer';


import About from './pages/About/About';
import Projects from './pages/Projects/Projects'

const RoutesApp = () => {
    return ( 

        <BrowserRouter>
            <Headers/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/about' element={ <About/> }/>
                <Route path='/projects' element={ <Projects/> }/>
            </Routes>
            <Footer/>
        </BrowserRouter>

     );
}
 
export default RoutesApp;
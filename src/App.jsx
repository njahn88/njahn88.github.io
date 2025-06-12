import {Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import DieOrPrize from "./pages/InfoPages/DieOrPrize.jsx";
import BohemianRetreat from './pages/InfoPages/BohemianRetreat.jsx'

function App() {

  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Blog' element={<Blog/>} />
            <Route path='/About Me' element={<AboutMe/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Die Or Prize' element={<DieOrPrize/>}/>
            <Route path='/Bohemian Retreat' element={<BohemianRetreat/>}/>
        </Routes>
    </>
  )
}

export default App

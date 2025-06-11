import {Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";

function App() {

  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Blog' element={<Blog/>} />
        </Routes>
    </>
  )
}

export default App

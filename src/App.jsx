import {Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import DieOrPrize from "./pages/InfoPages/DieOrPrize.jsx";
import BohemianRetreat from './pages/InfoPages/BohemianRetreat.jsx'
import OnlyUp from './pages/InfoPages/OnlyUp.jsx'
import Dust2Analysis from './pages/BlogPages/Dust2Analysis.jsx'
import ReworkLolTutorial from './pages/BlogPages/ReworkLolTutorial.jsx'
import ArkhamKnightCombatAnalysis from './pages/BlogPages/ArkhamKnightCombatAnalysis.jsx'
import Devlog from './pages/BlogPages/Devlog.jsx'

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
            <Route path='/Only Up' element={<OnlyUp/>}/>
            <Route path='/Blog/Level Design Analysis: Counter Strike 2' element={<Dust2Analysis/>}/>
            <Route path='/Blog/Reworking League of Legends New Player Experience' element={<ReworkLolTutorial/>}/>
            <Route path='/Blog/Arkham Knight Intro Design Analysis' element={<ArkhamKnightCombatAnalysis/>}/>
            <Route path='/Blog/Devlog' element={<Devlog/>}/>
        </Routes>
    </>
  )
}

export default App

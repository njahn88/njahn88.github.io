import {Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";

export default function Navbar() {
  return (
      <>
          <div className={'grid grid-rows-2 w-full justify-center items-center p-3'}>
              <div className={'font-bold font-outfit text-5xl pb-4'}>
                  Nathan Jahn - Game Developer
              </div>
              <div className={'flex justify-center items-center gap-6'}>
                  <div className={'font-outfit text-1xl transition-all duration-100 hover:font-bold'}>
                      <Link to="/">Portfolio</Link>
                  </div>
                  <div className={'font-outfit text-1xl transition-all duration-100 hover:font-bold'}>
                      <Link to="/Blog">Blog</Link>
                  </div>
                  <div className={'font-outfit text-1xl transition-all duration-100 hover:font-bold'}>
                      <Link to="/About Me">About Me</Link>
                  </div>
                  <div className={'font-outfit text-1xl transition-all duration-100 hover:font-bold'}>
                      <Link to="/Contact">Contact</Link>
                  </div>
              </div>
          </div>
          <hr className={'border-gray-300 mx-6'} />
      </>
  )
}
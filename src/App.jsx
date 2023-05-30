import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./VanLife/Navbar/Home"
import About from "./VanLife/Navbar/ABout"

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className='navbar'>
          <div className='navCeneter'>
            <div>
              <Link className='logo' to='/'>
                #VANLIFE
              </Link>
            </div>
            <div>
              <Link to='/about'>About</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

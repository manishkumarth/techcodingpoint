import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Courses from './pages/courses'
import Getintouch from './pages/getintouch'
import Aboutus from './pages/aboutus'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/getintouch' element={<Getintouch />} />
        <Route path='/about' element={<Aboutus />} />
      </Routes>
      <div className='fixed bottom-0 right-0'>
        {!isOpen &&
          <div onClick={() => setIsOpen(true)} className='w-12 h-12 rounded-full bg-white text-black p-2 text-center cursor-pointer'>Chat</div>

        }
        {isOpen &&
          <div>

            <div onClick={() => setIsOpen(false)} className='w-12 h-12 rounded-full bg-white text-black p-2 text-center cursor-pointer'>X</div>
            {/* <iframe width="300" height="500" src="https://www.jotform.com/agent/019bc55fe4077ac4a50818d72274e1ae5d15" frameborder="0"></iframe> */}
          </div>
        }
      </div>

    </>
  )
}

export default App

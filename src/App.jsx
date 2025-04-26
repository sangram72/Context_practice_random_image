import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Body from './Components/Body/Body'
import About from './Components/About'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
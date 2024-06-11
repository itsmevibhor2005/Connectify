import { useState } from 'react'
import Home from './components/home'
import './App.css'
import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App

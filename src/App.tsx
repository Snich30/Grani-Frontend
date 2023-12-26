import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import './App.scss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Outlet/>
    
  )
}

export default App

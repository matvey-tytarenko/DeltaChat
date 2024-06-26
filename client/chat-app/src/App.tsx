import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Chat />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/signup' element={<Register />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
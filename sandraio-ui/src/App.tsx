import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LayoutHeader from './component/layout/LayoutHeader'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro/Cadastro'
import 'antd/dist/antd.css';
import Agenda from './pages/Agenda/Agenda';
import Equipe from './pages/Equipe/Equipe';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <LayoutHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/agendamento" element={<Agenda />} />
          <Route path="/equipe" element={<Equipe />} />
        </Routes>
    </LayoutHeader>
    </BrowserRouter>
  )
}

export default App

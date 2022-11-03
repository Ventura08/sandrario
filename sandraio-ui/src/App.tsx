import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LayoutHeader from './component/layout/LayoutHeader'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './component/Cadastro/Cadastro'
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<LayoutHeader><Cadastro /></LayoutHeader>} />
        </Routes>

    </BrowserRouter>
  )
}

export default App

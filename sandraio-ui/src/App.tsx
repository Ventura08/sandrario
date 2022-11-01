import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './component/layout/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cadastro from './component/Cadastro/Cadastro'


function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Cadastro />} />
      </Routes>
      </Layout> 
    </BrowserRouter>
  )
}

export default App

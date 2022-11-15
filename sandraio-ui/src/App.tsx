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
import './styles/base.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
        <Routes>
        <Route
            path="/"
            element={
              <LayoutHeader>
                <Home />
              </LayoutHeader>
            }
          />
           <Route
            path="/cadastro"
            element={
              <LayoutHeader>
                <Cadastro />
              </LayoutHeader>
            }
          />
           <Route
            path="/agendamento"
            element={
              <LayoutHeader>
                <Agenda />
              </LayoutHeader>
            }
          />
           <Route
            path="/equipe"
            element={
              <LayoutHeader>
                <Equipe />
              </LayoutHeader>
            }
          />
        </Routes>
    </BrowserRouter>
  )
}

export default App

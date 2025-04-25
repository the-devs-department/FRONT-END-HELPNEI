import React from "react";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from './DashboardPage/Dashboard'
import CadastroPage from "./CadastroPage/Cadastro";
import HomePage from './HomePage/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CadastroPage/>}></Route>
        <Route path="/dashboard" element={<DashboardPage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
};
 
export default App;

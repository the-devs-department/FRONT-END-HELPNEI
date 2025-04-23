import React from "react";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpresaPage from './empresa'
import HomePage from './PaginaEmpresas/home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmpresaPage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
};
 
export default App;

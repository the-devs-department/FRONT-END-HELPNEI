import React from "react";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from './DashboardPage/Dashboard';
import CadastroPage from "./CadastroPage/Cadastro";
import HomePage from './HomePage/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* Rota protegida */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        {/* Rota coringa para 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

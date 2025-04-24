import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import CadastroPage from './containers/Cadastro';
import ScrollToTop from './components/ScrollToTop';
import { pingBackend } from './services/pingBackend';

// Componente de página 404 direto aqui
function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404</h1>
      <p>Página não encontrada</p>
    </div>
  );
}

// Verifica se o backend está online
pingBackend();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CadastroPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} /> {/* 👈 Rota 404 */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-[var(--color-blue-primary)] mb-4">404 - Página não encontrada</h1>
      <p className="text-lg text-gray-700 mb-6">A página que você está tentando acessar não existe.</p>
      <Link to="/home" className="bg-[var(--color-blue-primary)] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition text-lg">
        Voltar para o início
      </Link>
    </div>
  );
};

export default NotFound;

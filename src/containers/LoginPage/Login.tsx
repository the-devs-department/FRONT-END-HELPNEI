import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoHelpnei from '../../images/logoHelpnei.webp';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  // Função para validar os caracteres do e-mail
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Verifica se o e-mail é valido
    if (!validateEmail(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      return;
    } else {
      setEmailError('');
    }

    try {
      // Método fetch de enviar dados para o backend, que vai receber os dados do formulário
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok && data.token) {
        //Aqui será armazenado o token (localStorage)
        //para utilizar basta apenas usar -> const token = localStorage.getItem('token');
        localStorage.setItem('token', data.token);
        localStorage.setItem('renda', data.renda)
        setLoginError('');
        navigate('/'); // redireciona após login válido
      } else {
        setLoginError('Email ou senha inválidos.');
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      setLoginError('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div>      
      <main className="flex-grow flex justify-center items-center px-4">
        <div className="bg-white w-full max-w-md p-6 sm:p-10 shadow-lg rounded-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-[var(--color-blue-primary)] mb-4">
            Login
          </h1>

          <p className="text-center text-sm sm:text-base mb-8">
            <span className="font-bold text-[var(--color-blue-primary)]">Bem-vindo de volta!</span> Acesse sua conta e
            continue sua jornada com a{' '}
            <span className="text-[var(--color-blue-primary)] font-bold">Helpnei</span>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 p-6 rounded-lg shadow">
            <div>
              <label className="block font-bold text-[var(--color-blue-primary)] mb-1">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className={`w-full bg-white border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring focus:ring-blue-300 text-sm p-2`}
              />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>

            <div>
              <label className="block font-bold text-[var(--color-blue-primary)] mb-1">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className="w-full bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-sm p-2 pr-20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 bottom-2 text-sm font-bold text-blue-700 hover:text-blue-900 transition"
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>

            {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-blue-950 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-900 transition w-full sm:w-auto"
              >
                Entrar
              </button>
              <div className="text-center pt-4">
                <Link to="/cadastro" className="text-[var(--color-blue-primary)] underline font-bold rounded-md hover:text-blue-700 transition">Não sou cadastrado</Link>
              </div>
            </div>
          </form>
        </div>
      </main>

      <footer className="flex justify-center items-center w-full h-12 fixed bottom-0 left-0 bg-blue-950 text-white py-4">
        <img src={LogoHelpnei} alt="Logo Helpnei" className="h-[100%] object-contain" />
      </footer>
    </div>
  );
};

export default LoginPage;

import React, { useEffect} from 'react';
import { Link } from 'react-router-dom'
import LogoHelpnei from '../../images/logoHelpnei.webp'


const CadastroPage: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('cadastro-body');
    return () => {
      document.body.classList.remove('cadastro-body');
    };
  }, []);

  return (
    <div className="bg-F5F5F5 text-black font-sans min-h-screen flex items-center justify-center p-6">
      <div className="bg-white max-w-2xl w-full p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-[var(--color-blue-primary)] mb-4">
          Cadastro de Usuário
        </h1>
        <p className="text-center text-sm mb-10">
          <span className="font-bold text-blue-900">Seja Bem-Vindo</span> ao
          cadastro de usuário da{' '}
          <span className="text-blue-900 font-bold">Helpnei</span>! Aqui você
          poderá{' '}
          <span className="text-blue-900 font-bold">
            escolher qual empresa poderá te patrocinar
          </span>
          , de acordo com o seu{' '}
          <span className="text-blue-900 font-bold">perfil</span>!
        </p>
        <form className="space-y-6 bg-gray-100 shadow-lg p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-6">
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-sm p-2"
              />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">CPF</label>
              <input
                type="text"
                placeholder="XXX.XXX.XXX-XX"
                className="w-full bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-sm p-2"
              />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Renda Familiar</label>
              <select className="w-full bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-sm p-2">
                <option disabled selected>Selecionar</option>
                <option value="ate1">Até 1 salário</option>
                <option value="ate3">Até 3 salários</option>
                <option value="mais3">Mais de 3 salários</option>
              </select>
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Sexo</label>
              <select className="w-full bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-sm p-2">
                <option disabled selected>Selecionar</option>
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="outro">Outro</option>
              </select>
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
          </div>
          <div className="text-center font-bold text-lg mt-6 text-[var(--color-blue-primary)]">Endereço</div>
          <div className="grid grid-cols-2 gap-6">
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Logradouro</label>
              <input
                type="text"
                placeholder="Rua, Avenida..."
                className="w-full bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-sm p-2"
              />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Número</label>
              <input
                type="text"
                placeholder="Ex: 123"
                className="w-full bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-sm p-2"
              />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Complemento</label>
              <input
                type="text"
                placeholder="Perto de..."
                className="w-full bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-sm p-2"
              />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Cidade</label>
              <input
                type="text"
                placeholder="Sua cidade"
                className="w-full bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-sm p-2"
              />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">Estado</label>
              <select className="w-full bg-white border border-gray-300 rounded-md focus:ring focus:ring-blue-300 text-sm p-2">
                <option disabled selected>Selecionar</option>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="MG">MG</option>
                <option value="RS">RS</option>
              </select>
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
          </div>
          <div className="text-center py-3">
            <Link to="/home" className="bg-blue-950 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-900 transition">Cadastrar</Link>
          </div>
        </form>
        <footer className="flex justify-center items-center w-full h-12 fixed bottom-0 left-0 bg-blue-950 text-white py-4">
          <img src={LogoHelpnei} alt="" className='h-[100%] object-contain'/>
        </footer>
      </div>
    </div>
  );
};

export default CadastroPage;

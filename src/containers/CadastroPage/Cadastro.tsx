import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoHelpnei from '../../images/logoHelpnei.webp';

type FormField =
  | 'nome'
  | 'cpf'
  | 'renda'
  | 'sexo'
  | 'senha'
  | 'confirmarSenha'
  | 'logradouro'
  | 'numero'
  | 'complemento'
  | 'cidade'
  | 'estado';

const CadastroPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Record<FormField, string>>({
    nome: '',
    cpf: '',
    renda: 'Selecionar',
    sexo: 'Selecionar',
    senha: '',
    confirmarSenha: '',
    logradouro: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: 'Selecionar'
  });

  const [formError, setFormError] = useState(false);
  const [senhaDiferente, setSenhaDiferente] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.classList.add('cadastro-body');
    return () => {
      document.body.classList.remove('cadastro-body');
    };
  }, []);

  const formatCPF = (value: string) => {
    const numericValue = value.replace(/\D/g, '').slice(0, 11);
    return numericValue
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === 'cpf') {
      newValue = formatCPF(value);
    }

    if (name === 'nome') {
      newValue = value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    }

    if (name === 'numero') {
      newValue = value.replace(/\D/g, '');
    }

    setFormData({ ...formData, [name as FormField]: newValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmptyField = Object.values(formData).some(value => value.trim() === '' || value === 'Selecionar');

    if (isEmptyField) {
      setFormError(true);
      setSenhaDiferente(false);
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setSenhaDiferente(true);
      return;
    }

    setFormError(false);
    setSenhaDiferente(false);
    navigate('/home');
  };

  const getInputClass = (field: FormField) => {
    return `w-full bg-white border ${
      formError && (!formData[field] || formData[field] === 'Selecionar')
        ? 'border-rose-400'
        : 'border-gray-300'
    } rounded-md focus:ring focus:ring-blue-300 text-sm p-2`;
  };

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
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 shadow-lg p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-6">
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Nome</label>
              <input name="nome" type="text" placeholder="Digite seu nome" value={formData.nome} onChange={handleChange} className={getInputClass('nome')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">CPF</label>
              <input name="cpf" type="text" placeholder="XXX.XXX.XXX-XX" value={formData.cpf} onChange={handleChange} className={getInputClass('cpf')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>

            {/* Senha e Confirmar Senha lado a lado, com responsividade */}
            <div className="max-[575px]:col-span-2 relative">
              <label className="block font-bold text-[var(--color-blue-primary)]">Senha</label>
              <input
                name="senha"
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                value={formData.senha}
                onChange={handleChange}
                className={getInputClass('senha')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[3px] text-sm font-bold text-blue-700 hover:text-blue-900 transition"
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>

            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">Confirmar Senha</label>
              <input
                name="confirmarSenha"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirme sua senha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                className={getInputClass('confirmarSenha')}
              />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>

            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Renda Familiar</label>
              <select name="renda" value={formData.renda} onChange={handleChange} className={getInputClass('renda')}>
                <option disabled value="Selecionar">Selecionar</option>
                <option value="ate1">Até 1 salário</option>
                <option value="ate3">Até 3 salários</option>
                <option value="mais3">Mais de 3 salários</option>
              </select>
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Sexo</label>
              <select name="sexo" value={formData.sexo} onChange={handleChange} className={getInputClass('sexo')}>
                <option disabled value="Selecionar">Selecionar</option>
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
              <input name="logradouro" type="text" placeholder="Rua, Avenida..." value={formData.logradouro} onChange={handleChange} className={getInputClass('logradouro')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Número</label>
              <input name="numero" type="text" placeholder="Ex: 123" value={formData.numero} onChange={handleChange} className={getInputClass('numero')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Complemento</label>
              <input name="complemento" type="text" placeholder="Perto de..." value={formData.complemento} onChange={handleChange} className={getInputClass('complemento')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className='max-[575px]:col-span-2'>
              <label className="block font-bold text-[var(--color-blue-primary)]">Cidade</label>
              <input name="cidade" type="text" placeholder="Sua cidade" value={formData.cidade} onChange={handleChange} className={getInputClass('cidade')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">Estado</label>
              <select name="estado" value={formData.estado} onChange={handleChange} className={getInputClass('estado')}>
                <option disabled value="Selecionar">Selecionar</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
              </select>
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
          </div>

          {formError && <div className="text-center text-red-500 font-semibold">Por favor, preencha todos os campos obrigatórios.</div>}
          {senhaDiferente && <div className="text-center text-red-500 font-semibold">As senhas não coincidem.</div>}

          <div className="text-center py-3">
            <button type="submit" className="bg-blue-950 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-900 transition">Cadastrar</button>
          </div>
        </form>
        <footer className="flex justify-center items-center w-full h-12 fixed bottom-0 left-0 bg-blue-950 text-white py-4">
          <img src={LogoHelpnei} alt="Logo Helpnei" className='h-[100%] object-contain' />
        </footer>
      </div>
    </div>
  );
};

export default CadastroPage;

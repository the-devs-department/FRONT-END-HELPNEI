import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoHelpnei from '../../images/logoHelpnei.webp';

type FormField =
  | 'nome'
  | 'cpf'
  | 'renda'
  | 'sexo'
  | 'email'
  | 'confirmarEmail'
  | 'password'
  | 'confirmarSenha'
  | 'logradouro'
  | 'numero'
  | 'complemento'
  | 'cidade'
  | 'estado';

const CadastroPage: React.FC = () => {
  const navigate = useNavigate();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showUfSuggestions, setShowUfSuggestions] = useState(false);


  function removeAccents(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


  const [formData, setFormData] = useState<Record<FormField, string>>({
    nome: '',
    cpf: '',
    renda: 'Selecionar',
    sexo: 'Selecionar',
    email: '',
    confirmarEmail: '',
    password: '',
    confirmarSenha: '',
    logradouro: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
  });

  const [ufs, setUfs] = useState<string[]>([]);
  const [cidades, setCidades] = useState<string[]>([]);

  const [formError, setFormError] = useState(false);
  const [senhaDiferente, setSenhaDiferente] = useState(false);
  const [emailDiferente, setEmailDiferente] = useState(false);
  const [emailInvalido, setEmailInvalido] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.classList.add('cadastro-body');
    return () => {
      document.body.classList.remove('cadastro-body');
    };
  }, []);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(res => res.json())
      .then(data => {
        const siglas = data.map((uf: any) => uf.sigla);
        setUfs(siglas);
      })
      .catch(err => console.error('Erro ao buscar UFs:', err));
  }, []);

  useEffect(() => {
    if (formData.estado) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${formData.estado}/municipios`)
        .then(res => res.json())
        .then(data => {
          const nomes = data.map((cidade: any) => cidade.nome);
          setCidades(nomes);
        })
        .catch(err => console.error('Erro ao buscar cidades:', err));
    } else {
      setCidades([]);
    }
  }, [formData.estado]);

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

    if (name === 'cpf') newValue = formatCPF(value);
    if (name === 'nome') newValue = value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    if (name === 'numero') newValue = value.replace(/\D/g, '');

    if (name === 'estado') {
      setFormData({ ...formData, estado: newValue, cidade: '' });
    } else {
      setFormData({ ...formData, [name as FormField]: newValue });
    }
  };

  const isEmailValid = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEmptyField = Object.values(formData).some(
      value => value.trim() === '' || value === 'Selecionar'
    );

    if (isEmptyField) {
      setFormError(true);
      setSenhaDiferente(false);
      setEmailDiferente(false);
      setEmailInvalido(false);
      return;
    }

    if (formData.email !== formData.confirmarEmail) {
      setEmailDiferente(true);
      setEmailInvalido(false);
      setSenhaDiferente(false);
      setFormError(false);
      return;
    }

    if (!isEmailValid(formData.email)) {
      setEmailInvalido(true);
      setEmailDiferente(false);
      setSenhaDiferente(false);
      setFormError(false);
      return;
    }

    if (formData.password !== formData.confirmarSenha) {
      setSenhaDiferente(true);
      setEmailDiferente(false);
      setEmailInvalido(false);
      setFormError(false);
      return;
    }

     try {
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.status === 409) {
      const data = await response.json();
      alert(data.message); 
      return;
    }

    if (!response.ok) {
      throw new Error('Erro ao cadastrar usuário');
    }

    alert('Cadastro realizado com sucesso!');
    navigate('/login');

  } catch (error) {
    console.error('Erro no cadastro:', error);
    alert('Erro ao enviar dados. Tente novamente.');
  }
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
          <span className="font-bold text-blue-900">Seja Bem-Vindo</span> ao cadastro de usuário da{' '}
          <span className="text-blue-900 font-bold">Helpnei</span>! Aqui você poderá{' '}
          <span className="text-blue-900 font-bold">
            escolher qual empresa poderá te patrocinar
          </span>
          , de acordo com o seu <span className="text-blue-900 font-bold">perfil</span>!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 shadow-lg p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-6">
            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">Nome</label>
              <input name="nome" type="text" placeholder="Digite seu nome" value={formData.nome} onChange={handleChange} className={getInputClass('nome')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
 
            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">CPF</label>
              <input name="cpf" type="text" placeholder="XXX.XXX.XXX-XX" value={formData.cpf} onChange={handleChange} className={getInputClass('cpf')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
 
            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">Email</label>
              <input name="email" type="email" placeholder="Digite seu email" value={formData.email} onChange={handleChange} className={getInputClass('email')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
 
            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">Confirmar Email</label>
              <input name="confirmarEmail" type="email" placeholder="Confirme seu email" value={formData.confirmarEmail} onChange={handleChange} className={getInputClass('confirmarEmail')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
 
            <div className="max-[575px]:col-span-2 relative">
              <label className="block font-bold text-[var(--color-blue-primary)]">Senha</label>
              <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Digite sua senha" value={formData.password} onChange={handleChange} className={getInputClass('password')} />
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
              <input name="confirmarSenha" type={showPassword ? 'text' : 'password'} placeholder="Confirme sua senha" value={formData.confirmarSenha} onChange={handleChange} className={getInputClass('confirmarSenha')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
 
            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">Renda Familiar</label>
              <select name="renda" value={formData.renda} onChange={handleChange} className={getInputClass('renda')}>
                <option disabled value="Selecionar">Selecionar</option>
                <option value="ate1">Até 1 salário</option>
                <option value="ate3">Até 3 salários</option>
                <option value="mais3">Mais de 3 salários</option>
              </select>
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
 
            <div className="max-[575px]:col-span-2">
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
            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">Logradouro</label>
              <input name="logradouro" type="text" placeholder="Rua, Avenida..." value={formData.logradouro} onChange={handleChange} className={getInputClass('logradouro')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
 
            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">Número</label>
              <input name="numero" type="text" placeholder="Ex: 123" value={formData.numero} onChange={handleChange} className={getInputClass('numero')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
 
            <div className="max-[575px]:col-span-2">
              <label className="block font-bold text-[var(--color-blue-primary)]">Complemento</label>
              <input name="complemento" type="text" placeholder="Perto de..." value={formData.complemento} onChange={handleChange} className={getInputClass('complemento')} />
              <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
            </div>
 
            <div className="relative">
  <label className="block font-bold text-[var(--color-blue-primary)]">Estado</label>
  
  <input
    name="estado"
    type="text"
    placeholder="Digite ou selecione seu estado"
    value={formData.estado}
    onChange={(e) => {
      handleChange(e);
      setShowUfSuggestions(true);
    }}
    className={getInputClass('estado') + " w-full box-border"}
    autoComplete="off"
    onFocus={() => setShowUfSuggestions(true)} // Mostra todas as opções ao focar
    onBlur={() => setTimeout(() => setShowUfSuggestions(false), 100)} // Fecha ao perder foco
  />

  {showUfSuggestions && (
    <ul className="border border-gray-300 max-h-40 overflow-y-auto mt-1 rounded-md shadow-md bg-white z-10 absolute w-full box-border">
      {ufs
        .filter(uf =>
          uf.toLowerCase().includes(formData.estado.toLowerCase())
        )
        .map(uf => (
          <li
            key={uf}
            onClick={() => {
              setFormData({ ...formData, estado: uf });
              setShowUfSuggestions(false);
            }}
            className="cursor-pointer px-2 py-1 hover:bg-gray-200 w-full box-border"
          >
            {uf}
          </li>
        ))}
    </ul>
  )}

  <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
</div>


          <div className="relative">
          <label className="block font-bold text-[var(--color-blue-primary)]">Cidade</label>
          
          <input
            name="cidade"
            type="text"
            placeholder="Digite ou selecione sua cidade"
            value={formData.cidade}
            onChange={(e) => {
              handleChange(e);
              setShowSuggestions(true);
            }}
            className={getInputClass('cidade')}
            disabled={!formData.estado}
            autoComplete="off"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          />

          {formData.estado && showSuggestions && (
            <ul className="absolute w-full border border-gray-300 max-h-40 overflow-y-auto mt-1 rounded-md shadow-md bg-white z-10">
              {cidades
                .filter(cidade =>
                  removeAccents(cidade.toLowerCase())
                    .includes(removeAccents(formData.cidade.toLowerCase()))
                )
                .map(cidade => (
                  <li
                    key={cidade}
                    onClick={() => {
                      setFormData({ ...formData, cidade });
                      setShowSuggestions(false);
                    }}
                    className="cursor-pointer px-2 py-1 hover:bg-gray-200 w-full box-border"
                  >
                    {cidade}
                  </li>
                ))}
            </ul>
          )}

          <hr className="border-t-4 border-[var(--color-blue-primary)] mt-2" />
        </div>
        </div>
 
          {formError && <div className="text-center text-red-500 font-semibold">Por favor, preencha todos os campos obrigatórios.</div>}
          {emailDiferente && <div className="text-center text-red-500 font-semibold">Os emails não coincidem.</div>}
          {emailInvalido && <div className="text-center text-red-500 font-semibold">Email inválido.</div>}
          {senhaDiferente && <div className="text-center text-red-500 font-semibold">As senhas não coincidem.</div>}
         
         
 
          <div className="text-center py-3 !mb-0 !mt-8">
            <button type="submit" className="bg-blue-950 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-900 transition">Cadastrar</button>
          </div>
          <div className="text-center pt-0 !mt-0">
            <Link to="/login" className="text-[var(--color-blue-primary)] underline font-bold rounded-md hover:text-blue-700 transition">Já possuo uma conta</Link>
          </div>
        </form>
 
        <footer className="flex justify-center items-center w-full h-12 fixed bottom-0 left-0 bg-blue-950 text-white py-4">
          <img src={LogoHelpnei} alt="Logo Helpnei" className="h-[100%] object-contain" />
        </footer>
      </div>
    </div>
  );
};
 
export default CadastroPage;
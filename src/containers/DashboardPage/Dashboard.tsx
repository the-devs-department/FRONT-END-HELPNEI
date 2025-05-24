import React, { useState, useEffect } from "react";
import { animateCounters } from "../../utils/animateCounters";
import Brazil from "@react-map/brazil";
import { Link, useParams } from 'react-router-dom';
import usuarioIcon from '../../images/usuarioicon.png'
import mapaIcon from '../../images/mapaicon.png'
import afilioadosImg from '../../images/afiliados.png'
import grafiIcon from '../../images/graficoicon.png'
import shoppingIcon from '../../images/shopping-store.png'
import linkedinIcon from '../../images/linkedin.png'
import instaIcon from '../../images/instagram.png'
import webIcon from '../../images/www.png'

interface SponsorInfos {
  sponsorId: number;
  nameSponsor: string;
  descriptionSponsor: string;
  descriptionTitle: string | null;
  exclusiveUrl: string | null;
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
  tiktok: string | null;
  x: string | null;
  kawai: string | null;
  whatsapp: string | null;
  site_web: string | null;
  urlSponsor: string | null;
  highSponsorLogo: string;
  lowSponsorLogo: string;
}

interface CompanyData {
  sponsorInfos: SponsorInfos;
  impactedUsers: number;
  totalAffiliates: number;
  mediumGrowth: string;
  createdStores: number;
  totalCities: number;
  cities: {
    sponsorId: number;
    [key: string]: number;
  };
}

const estados: { [key: string]: string } = {
  "Acre": "AC",
  "Alagoas": "AL",
  "Amapá": "AP",
  "Amazonas": "AM",
  "Bahia": "BA",
  "Ceará": "CE",
  "Distrito Federal": "DF",
  "Espírito Santo": "ES",
  "Goiás": "GO",
  "Maranhão": "MA",
  "Mato Grosso": "MT",
  "Mato Grosso do Sul": "MS",
  "Minas Gerais": "MG",
  "Pará": "PA",
  "Paraíba": "PB",
  "Paraná": "PR",
  "Pernambuco": "PE",
  "Piauí": "PI",
  "Rio de Janeiro": "RJ",
  "Rio Grande do Norte": "RN",
  "Rio Grande do Sul": "RS",
  "Rondônia": "RO",
  "Roraima": "RR",
  "Santa Catarina": "SC",
  "São Paulo": "SP",
  "Sergipe": "SE",
  "Tocantins": "TO"
}

const Dashboard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [citiesSelectedState, setCitiesSelectedState] = useState<number | null>(null);
  const [mapSize, setMapSize] = useState(250);
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submittedCompanyId, setSubmittedCompanyId] = useState<string | null>(null);
  const [isThisCompanySubmitted, setIsThisCompanySubmitted] = useState<boolean>(false);

  useEffect(() => {
    const fetchCompanyData = async () => {
      setError(null);
      if (!id) {
        setError("ID da empresa não fornecido na URL.");
        return;
      }

      const storedSubmittedId = localStorage.getItem('submittedCompanyId');
      if (storedSubmittedId) {
        setSubmittedCompanyId(storedSubmittedId);
        if (storedSubmittedId === id) {
          setIsThisCompanySubmitted(true);
        } else {
          setIsThisCompanySubmitted(false);
        }
      } else {
        setSubmittedCompanyId(null);
        setIsThisCompanySubmitted(false);
      }

      try {
        const response = await fetch(`http://localhost:3000/dashboard/${id}`);
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados da empresa: ${response.statusText}`);
        }
        const data: CompanyData = await response.json();
        setCompanyData(data);
        setCitiesSelectedState(data.totalCities);
        setTimeout(() => animateCounters(), 100);
      } catch (err) {
        console.error(`Erro ao carregar os detalhes da empresa de id ${id}:`, err);
        setError("Não foi possível carregar os detalhes desta empresa.");
      }
    };
    fetchCompanyData();
  }, [id]);

  useEffect(() => {
    document.body.classList.add('dashboard-body');
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setMapSize(140);
      } else if (window.innerWidth <= 768) {
        setMapSize(180);
      } else {
        setMapSize(250);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      document.body.classList.remove('dashboard-body');
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleSelect(state: string): void {
    console.log("Estado selecionado:", state);
    setSelectedState(state);
    const siglaEstado = estados[state]
    if (companyData && companyData.cities && siglaEstado) {
      const quantidadeCidades = companyData.cities[siglaEstado]
      setCitiesSelectedState(quantidadeCidades)
    }
  }

  function handleSponsorButtonClick() {
    const confirmacao = confirm(`Confirmar solicitação de patrocinio para ${sponsorInfos.nameSponsor}?`)
    if (confirmacao){
      if (id) {
        localStorage.setItem('submittedCompanyId', id);
        setSubmittedCompanyId(id);
        setIsThisCompanySubmitted(true);
      }
    }
  }

  function handleCancelSolicitationClick() {
    const confirmacao = confirm(`Cancelar solicitação de patrocinio para ${sponsorInfos.nameSponsor}?`)
    if (confirmacao){
      localStorage.removeItem('submittedCompanyId');
      setSubmittedCompanyId(null);
      setIsThisCompanySubmitted(false);
    }
  }
  const isSponsorButtonDisabled = submittedCompanyId !== null && submittedCompanyId !== id;

  let buttonContent;

  if (isThisCompanySubmitted) {
    buttonContent = (
      <button
        onClick={handleCancelSolicitationClick}
        className=" border-2 border-red-600 p-2 rounded bg-red-600 text-white text-lg transition duration-300 ease-in-out
          hover:bg-red-700"> Cancelar solicitação
      </button>
    );
  } else {
    const buttonClasses = `
      border-2 p-2 rounded text-lg transition duration-300 ease-in-out
      ${isSponsorButtonDisabled
        ? 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
        : 'border-green-600 bg-green-600 text-white hover:bg-green-700'
      }
    `;
    buttonContent = (
      <button
        onClick={handleSponsorButtonClick}
        disabled={isSponsorButtonDisabled}
        className={buttonClasses}>
        Quero ser patrocinado
      </button>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-red-50 text-red-700">
        <p className="text-xl font-bold">{error}</p>
        <p className="mt-4">Por favor, tente novamente mais tarde.</p>
        <Link to="/home" className="mt-8 bg-[var(--color-blue-primary)] text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition">
          Voltar para Home
        </Link>
      </div>
    );
  }

  if (!companyData) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-yellow-50 text-yellow-700">
        <p className="text-xl font-bold">Nenhum dado de empresa encontrado para este ID.</p>
        <Link to="/home" className="mt-8 bg-[var(--color-blue-primary)] text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition">
          Voltar para Home
        </Link>
      </div>
    );
  }

  const { sponsorInfos, impactedUsers, totalAffiliates, mediumGrowth, createdStores, totalCities } = companyData;

  return (
    <div>
      <div className=" px-4 py-4">
        <Link to="/" className="inline-block bg-white border border-[var(--color-blue-primary)] text-[var(--color-blue-primary)] font-bold py-2 px-4 rounded-md hover:bg-blue-50 transition"> &larr; Voltar
        </Link>
      </div>
      <div className="max-w-5xl w-full mx-auto p-6 pb-2 rounded-lg mt-4">
        <div className="flex flex-col items-center justify-around border-b pb-4 gap-x-6 text-center">
          <img
            src={sponsorInfos.lowSponsorLogo}
            alt={sponsorInfos.nameSponsor || "Logo da Empresa"}
            className="logo w-[200px] h-[200px] object-contain rounded"
          />
          <div className="flex flex-col items-center">
            <p className="text-gray-700 text-3xl leading-relaxed font-bold">{sponsorInfos.nameSponsor}</p>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 text-1xl leading-relaxed pb-3 text-justify">
                {sponsorInfos.descriptionSponsor}
              </p>
              {buttonContent}
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-6 text-center border-b pb-6">IMPACTO DA EMPRESA</h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="
            max-sm:justify-between max-sm:gap-8
            bg-gray-100 p-10 col-span-2 shadow-lg rounded-lg text-center flex items-center
            justify-evenly col-span-2 gap-x-6 transition-transform transform
            hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <img src={usuarioIcon} alt="Ícone" className="max-sm:hidden w-24 h-24" />
            <div className="cidadetext flex flex-col items-center">
              <p className="max-md:text-[30px] text-gray-800 text-[50px] font-bold counter" data-count={impactedUsers}>0</p>
              <p className="max-md:text-[15px] font-semibold text-[20px]">USUÁRIOS TOTAIS</p>
            </div>
            <img src={usuarioIcon} alt="Ícone" className="max-sm:w-16 max-sm:h-16 w-24 h-24" />
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          </div>
          <div className="
            max-sm:col-span-2 max-sm:gap-5 max-sm:justify-between max-md:justify-center
            flex items-center justify-between gap-6
            bg-gray-100 p-10 col-span-1 rounded-lg shadow-md transition-transform transform
            hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <div className="text-left">
              <p className="max-md:text-[25px] max-lg:text-[35px] text-gray-800 text-[50px] font-bold counter" data-count={totalCities}>0</p>
              <p className="max-md:text-[13px] max-lg:text-[17px] font-semibold text-[20px]">CIDADES ATENDIDAS</p>
            </div>
            <img src={mapaIcon} alt="Ícone" className='max-sm:w-16 max-sm:h-16 w-24 h-24' />
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          </div>
          <div className="
            max-sm:col-span-2 max-sm:gap-10 max-sm:justify-between max-md:justify-center
            flex items-center justify-between gap-6
            bg-gray-100 p-10 col-span-1 rounded-lg shadow-md transition-transform transform
            hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <div className="text-left">
              <p className="max-md:text-[35px] max-lg:text-[35px] text-gray-800 text-[50px] font-bold counter" data-count={totalAffiliates}>0</p>
              <p className="max-md:text-[13px] max-lg:text-[17px] font-semibold text-[20px]">AFILIADOS TOTAIS</p>
            </div>
            <img src={afilioadosImg} alt="Ícone" className='max-sm:w-16 max-sm:h-16 w-24 h-24' />
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          </div>
          <div className="
            max-sm:col-span-2 max-sm:gap-3 max-sm:justify-between max-md:justify-center
            flex items-center justify-between gap-6
            bg-gray-100 p-10 col-span-1 rounded-lg shadow-md transition-transform transform
            hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <div className="text-left">
              <p className="max-md:text-[35px] max-lg:text-[35px] text-gray-800 text-[50px] font-bold counter" data-count={parseFloat(mediumGrowth)} data-suffix="%">0%</p>
              <p className="max-md:text-[13px] max-lg:text-[17px] font-semibold text-[20px]">CRESCIMENTO MÉDIO</p>
            </div>
            <img src={grafiIcon} alt="Ícone" className='max-sm:w-16 max-sm:h-16 w-24 h-24' />
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          </div>
          <div className="
            max-sm:col-span-2 max-sm:gap-10 max-sm:justify-between max-md:justify-center
            flex items-center justify-between gap-6
            bg-gray-100 p-10 col-span-1 rounded-lg shadow-md transition-transform transform
            hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <div className="text-left">
              <p className="max-md:text-[35px] max-lg:text-[35px] text-gray-800 text-[50px] font-bold counter" data-count={createdStores}>0</p>
              <p className="max-md:text-[13px] max-lg:text-[17px] font-semibold text-[20px]">LOJAS CRIADAS</p>
            </div>
            <img src={shoppingIcon} alt="Ícone" className='max-sm:w-16 max-sm:h-16 w-24 h-24' />
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          </div>
          <div className='max-sm:gap-6 max-lg:flex-col
            bg-gray-100 p-6 rounded-lg shadow-md text-center justify-around flex items-center col-span-2 relative'>
            <div className='max-lg:flex-col flex flex-col items-center justify-center gap-y-4'>
              <p className="max-sm:text-4xl max-lg:text-6xl text-gray-800 text-8xl font-bold counter" data-count={setCitiesSelectedState}>
                {citiesSelectedState}
              </p>
              <p className="max-sm:text-xl font-semibold text-2xl">CIDADES ATINGIDAS</p>
              <p className="text-lg text-[#143357] font-bold">Estado: {selectedState ? selectedState : "--"}</p>
            </div>
            <div className="absolute top-3 left-3 right-3 h-1 bg-gray-700 rounded-full"></div>
            <Brazil
              onSelect={(state) => handleSelect(state as string)}
              size={mapSize}
              mapColor="#143357"
              strokeColor="white"
              hoverColor="#B107"
              type="select-single"
              selectColor="#B1070A"
              hints={true}
            />
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        <div className="social flex items-center justify-center pt-4 gap-x-12 col-span-2">
          {sponsorInfos.linkedin && (
            <a href={sponsorInfos.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
            </a>
          )}
          {sponsorInfos.instagram && (
            <a href={sponsorInfos.instagram} target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
            </a>
          )}
          {sponsorInfos.site_web && (
            <a href={sponsorInfos.site_web} target="_blank" rel="noopener noreferrer">
              <img src={webIcon} alt="Website" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
            </a>
          )}
        </div>
        <div className="w-full max-w-none text-center mt-3 border-t pt-2 pb-0">
          <p className="text-gray-600 font-semibold">Helpnei</p>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
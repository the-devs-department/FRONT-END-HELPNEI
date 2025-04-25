import React, { useState, useEffect } from "react";
import { animateCounters } from "../../utils/animateCounters";
import Brazil from "@react-map/brazil";
import { Link } from 'react-router-dom';
import AmazonLogo from '../../images/amazonlogopreta.png'
import usuarioIcon from '../../images/usuarioicon.png'
import mapaIcon from '../../images/mapaicon.png'
import afilioadosImg from '../../images/afiliados.png'
import grafiIcon from '../../images/graficoicon.png'
import shoppingIcon from '../../images/shopping-store.png'
import linkedinIcon from '../../images/linkedin.png'
import instaIcon from '../../images/instagram.png'
import webIcon from '../../images/www.png'

const Dashboard: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [mapSize, setMapSize] = useState(250); 

  useEffect(() => {
    
    document.body.classList.add('dashboard-body');
    
    animateCounters();
  
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
  }
//bg-[var(--color-blue-primary)]
  return (
    <div>
      <div className="flex justify-start">
        <Link to="/home" className="bg-white text-left border border-[var(--color-blue-primary)] text-[var(--color-blue-primary)] font-bold py-2 px-3 rounded-md hover:bg-blue-50 transition">&larr; Voltar</Link>
      </div>
      <div className="max-w-5xl w-full mx-auto p-6 pb-2 rounded-lg mt-4">
        <div className="flex flex-col items-center justify-around border-b pb-4 gap-x-6 text-center">
          <img src={AmazonLogo} alt="Amazon" className="logo w-[200px] h-[200px]" />
          <div className="flex flex-col items-center">
            <p className="text-gray-700 text-3xl leading-relaxed font-bold">Amazon</p>
            <p className="text-gray-700 text-1xl leading-relaxed pb-3 text-justify">
            A Amazon é uma das maiores empresas de tecnologia e comércio eletrônico do mundo, 
            fundada por Jeff Bezos em 1994, inicialmente como uma livraria online. 
            Com o tempo, expandiu seu catálogo para incluir uma ampla variedade de produtos, 
            tornando-se referência global em e-commerce. Além do varejo, a Amazon atua em setores como computação em nuvem, 
            por meio da Amazon Web Services (AWS), inteligência artificial, streaming (Amazon Prime Video) 
            e dispositivos eletrônicos, como os da linha Alexa. A empresa é reconhecida pela sua logística eficiente, 
            inovação constante e foco na experiência do cliente. Seu modelo de negócios influencia profundamente 
            o mercado global, e ela continua sendo uma das marcas mais valiosas do mundo. 
            A sede da empresa está localizada em Seattle, nos Estados Unidos.
            </p>
          </div>  
        </div>
        <h2 className="text-2xl font-bold mt-6 text-center border-b pb-6">IMPACTO DA EMPRESA</h2>
        {/* dashbord metricas*/}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="
            max-sm:justify-between max-sm:gap-8
            bg-gray-100 p-10 col-span-2 shadow-lg rounded-lg text-center flex items-center 
            justify-evenly col-span-2 gap-x-6 transition-transform transform 
            hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <img src={usuarioIcon} alt="Ícone" className="max-sm:hidden w-24 h-24" />
            <div className="cidadetext flex flex-col items-center">
              <p className="max-md:text-[30px] text-gray-800 text-[50px] font-bold counter" data-count="1200">0</p>
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
            <p className="max-md:text-[25px] max-lg:text-[35px] text-gray-800 text-[50px] font-bold counter" data-count="125000">0</p>
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
            <p className="max-md:text-[35px] max-lg:text-[35px] text-gray-800 text-[50px] font-bold counter" data-count="800">0</p>
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
            <p className="max-md:text-[35px] max-lg:text-[35px] text-gray-800 text-[50px] font-bold counter" data-count="75" data-suffix="%">0%</p>
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
            <p className="max-md:text-[35px] max-lg:text-[35px] text-gray-800 text-[50px] font-bold counter" data-count="150">0</p>
            <p className="max-md:text-[13px] max-lg:text-[17px] font-semibold text-[20px]">LOJAS CRIADAS</p>
          </div>
          <img src={shoppingIcon} alt="Ícone" className='max-sm:w-16 max-sm:h-16 w-24 h-24' />
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
        <div className='max-sm:gap-6 max-lg:flex-col 
          bg-gray-100  p-6 rounded-lg shadow-md text-center justify-around flex items-center col-span-2 relative'>
        <div className='max-lg:flex-col flex flex-col items-center justify-center gap-y-4'>
            <p className="max-sm:text-4xl max-lg:text-6xl text-gray-800 text-8xl font-bold counter" data-count="5569">0</p>
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
        <a href="https://www.linkedin.com/company/amazon/posts/?feedView=all" target="_blank">
          <img src={linkedinIcon} alt="Ícone" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/amazonbrasil/" target="_blank">
          <img src={instaIcon} alt="Ícone" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
        </a>
        <a href="https://www.amazon.com.br/" target="_blank">
          <img src={webIcon} alt="Ícone" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
        </a>
      </div>
      <div className="w-full max-w-none text-center mt-3 border-t pt-2 pb-0">
        <p className="text-gray-600 font-semibold">Helpnei</p>
      </div>
    </div>
    </div>
  );
};
export default Dashboard;
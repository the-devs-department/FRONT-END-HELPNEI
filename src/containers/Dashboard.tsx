import React, { useState, useEffect } from "react";
import "../App.css";
import { animateCounters } from "../utils/animateCounters";
import Brazil from "@react-map/brazil";
import { Link } from 'react-router-dom';
import { useDashboard } from "../hooks/useDashboard";

const Dashboard: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [mapSize, setMapSize] = useState(250);
  const { data, loading } = useDashboard("1"); // ID exemplo da empresa

  useEffect(() => {
    document.body.classList.add('dashboard-body');
    
    if (!loading) {
      animateCounters();
    }
  
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
  }, [loading]);

  function handleSelect(state: string): void {
    console.log("Estado selecionado:", state);
    setSelectedState(state);
  }
//bg-[var(--color-blue-primary)]
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  return (
    <div>
      <div className="flex justify-start">
        <Link to="/" className="bg-white text-left border border-[var(--color-blue-primary)] text-[var(--color-blue-primary)] font-bold py-2 px-3 rounded-md hover:bg-blue-50 transition">&larr; Voltar</Link>
      </div>

      <div className="max-w-4xl mx-auto p-6 pb-2 rounded-lg mt-4">
        <div className="flex items-center justify-around border-b pb-4 gap-x-6">
          <img src="/img/amazonlogopreta.png" alt="Amazon" className="logo w-[200px] h-[200px]" />
          <div className="flex flex-col items-center">
            <p className="text-gray-700 text-3xl leading-relaxed font-bold">Amazon</p>
            <p className="text-gray-700 text-1xl leading-relaxed pb-3">
              A Amazon é uma das maiores empresas de tecnologia e comércio eletrônico do mundo, fundada por Jeff Bezos em 1994, inicialmente como uma livraria online. Com o tempo, expandiu seu catálogo para incluir uma ampla variedade de produtos, tornando-se referência global em e-commerce. Além do varejo, a Amazon atua em setores como computação em nuvem, por meio da Amazon Web Services (AWS), inteligência artificial, streaming (Amazon Prime Video) e dispositivos eletrônicos, como os da linha Alexa. A empresa é reconhecida pela sua logística eficiente, inovação constante e foco na experiência do cliente. Seu modelo de negócios influencia profundamente o mercado global, e ela continua sendo uma das marcas mais valiosas do mundo. A sede da empresa está localizada em Seattle, nos Estados Unidos.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6 text-center border-b pb-6">IMPACTO DA EMPRESA</h2>
        {/* dashbord metricas*/}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-100 p-10 shadow-lg rounded-lg text-center flex items-center justify-around col-span-2 gap-x-6 transition-transform transform hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <img src="/img/usuarioicon.png" alt="Ícone" className="w-24 h-24" />
            <div className="cidadetext flex flex-col items-center">
              <p className="text-gray-800 text-[50px] font-bold counter" data-count={data?.impactedUsers || 0}>0</p>
              <p className="font-semibold text-[20px]">USUÁRIOS TOTAIS</p>
            </div>
            <img src="/img/usuarioicon.png" alt="Ícone" className="w-24 h-24" />
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          </div>

          <div className="bg-gray-100 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <img src="/img/mapaicon.png" alt="Ícone" className="w-32 h-32 custom-absolute" />
            <div className="text-left">
              <p className="text-gray-800 text-[50px] font-bold counter" data-count={data?.citiesCount || 0}>0</p>
              <p className="font-semibold text-[17px]">CIDADES ATENDIDAS</p>
            </div>
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          </div>

          <div className="bg-gray-100 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <img src="/img/afiliados.png" alt="Ícone" className="w-32 h-32 custom-absolute" />
            <div className="text-left">
              <p className="text-gray-800 text-[50px] font-bold counter" data-count={data?.totalAffiliates || 0}>0</p>
              <p className="font-semibold text-[17px]">AFILIADOS TOTAIS</p>
            </div>
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          </div>

          <div className="bg-gray-100 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <img src="/img/graficoicon.png" alt="Ícone" className="w-24 h-24 custom-absolute2" />
            <div className="text-left">
              <p className="text-gray-800 text-[50px] font-bold counter" data-count={data?.mediumGrowth || 0} data-suffix="%">0%</p>
              <p className="font-semibold text-[17px]">CRESCIMENTO MÉDIO</p>
            </div>
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          </div>

          <div className="bg-gray-100 p-10 rounded-lg shadow-md flex justify-start relative transition-transform transform hover:scale-105 cursor-pointer">
            <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
            <img src="/img/shopping-store.png" alt="Ícone" className="w-32 h-32 custom-absolute" />
            <div className="text-left">
              <p className="text-gray-800 text-[50px] font-bold counter" data-count={data?.createdStores || 0}>0</p>
              <p className="font-semibold text-[17px]">LOJAS CRIADAS</p>
            </div>
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          </div>

          <div className="mapa bg-gray-100 p-6 rounded-lg shadow-md text-center justify-around flex items-center col-span-2 relative">
            <div className="mapatext flex flex-col items-center justify-center gap-y-4">
              <p className="text-gray-800 text-8xl font-bold counter" data-count="3500">0</p>
              <p className="font-semibold text-2xl">CIDADES ATINGIDAS</p>
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
            <img src="img/linkedin.png" alt="Ícone" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/amazonbrasil/" target="_blank">
            <img src="img/instagram.png" alt="Ícone" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
          </a>
          <a href="https://www.amazon.com.br/" target="_blank">
            <img src="img/www.png" alt="Ícone" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
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

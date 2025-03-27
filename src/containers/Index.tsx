import React from 'react';
import '../App.css';
import { useEffect } from "react";
import { animateCounters } from "../utils/animateCounters";

const App: React.FC = () => {
  useEffect(() => {
    animateCounters();
  }, []);
  return(
    <div>

    <br></br>

    <div className="max-w-4xl mx-auto p-6 pb-2 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-around border-b pb-4 gap-x-6">
        <img src="/img/amazonlogopreta.png" alt="Amazon" className="w-[200px] h-[200px]" />
        <div className="flex flex-col items-center">
          <p className="text-gray-700 text-3xl leading-relaxed font-bold">Amazon</p>
          <p className="text-gray-700 text-1xl leading-relaxed pb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nulla est, porttitor eget massa nec, vehicula maximus magna. Aenean efficitur tortor ac fringilla auctor. Etiam in eros ut velit sollicitudin tincidunt. Vestibulum lobortis quis dui quis semper. Phasellus vestibulum maximus tempor. Sed vel eros consequat, sodales turpis pharetra, molestie purus. In interdum porttitor urna, eu facilisis mauris interdum in. Suspendisse turpis neque, laoreet sed imperdiet mattis, venenatis pretium odio.
          </p>
        </div>
      </div>
 
      <h2 className="text-2xl font-bold mt-6 text-center border-b pb-6">IMPACTO DA EMPRESA</h2>
 
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-300 p-10 shadow-lg rounded-lg text-center flex items-center justify-around col-span-2 gap-x-6 transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/mapaicon.png" alt="Ícone" className="w-24 h-24" />
          <div className="flex flex-col items-center">
            <p className="text-gray-800 text-[50px] font-bold counter" data-count="125000">0</p>
            <p className="font-semibold text-[23px]">CIDADES ATENDIDAS</p>
          </div>
          <img src="/img/mapaicon.png" alt="Ícone" className="w-24 h-24" />
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
 
        <div className="bg-gray-300 p-10   rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/usuarioicon.png" alt="Ícone" className="w-32 h-32 absolute bottom-6 right-9" />
          <div className="text-left">
            <p className="text-gray-800 text-[50px] font-bold counter" data-count="1200">0</p>
            <p className="font-semibold text-[23px]">USUÁRIOS TOTAIS</p>
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
 
        <div className="bg-gray-300 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/afiliados.png" alt="Ícone" className="w-32 h-32 absolute bottom-6 right-9" />
          <div className="text-left">
            <p className="text-gray-800 text-[50px] font-bold counter" data-count="800">0</p>
            <p className="font-semibold text-[23px]">AFILIADOS TOTAIS</p>
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
 
        <div className="bg-gray-300 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/graficoicon.png" alt="Ícone" className="w-24 h-24 absolute bottom-11 right-9" />
          <div className="text-left">
            <p className="text-gray-800 text-[50px] font-bold counter" data-count="75" data-suffix="%">0%</p>
            <p className="font-semibold text-[23px]">CRESCIMENTO MÉDIO</p>
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
 
        <div className="bg-gray-300 p-10 rounded-lg shadow-md flex justify-start relative transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/shopping-store.png" alt="Ícone" className="w-32 h-32 absolute bottom-8 right-10" />
          <div className="text-left">
            <p className="text-gray-800 text-[50px] font-bold counter" data-count="150">0</p>
            <p className="font-semibold text-[23px]">LOJAS CRIADAS</p>
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
 
        <div className="bg-gray-300 p-10 rounded-lg shadow-md text-center justify-around flex items-center col-span-2 relative transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/brasil.png" alt="Ícone" className="w-15 h-15 mb-2 max-w-full" />
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p className="text-gray-800 text-5xl font-bold counter" data-count="48">0</p>
            <p className="font-semibold text-2xl">CIDADES ATINGIDAS (SP)</p>
          </div>
          <img src="/img/brsp.png" alt="Ícone" className="w-15 h-15 mb-2 max-w-full" />
          <img src="/img/filtro.png" alt="Ícone" className="w-7 h-7 absolute top-10 right-10" />
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
      </div>
 
      <div className="flex items-center justify-center pt-4 gap-x-12 col-span-2">
        <a href="https://www.linkedin.com/company/amazon/posts/?feedView=all" target="_blank">
          <img src="/img/linkedin.png" alt="Ícone" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/amazonbrasil/" target="_blank">
          <img src="/img/instagram.png" alt="Ícone" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
        </a>
        <a href="https://www.amazon.com.br/" target="_blank">
          <img src="/img/www.png" alt="Ícone" className="w-9 h-9 transition-transform transform hover:scale-110 cursor-pointer" />
        </a>
      </div>

    </div>

    </div>

  );
};
 
export default App;

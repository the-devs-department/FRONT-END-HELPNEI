import React, { useState, useEffect } from "react";
import "../App.css";
import { animateCounters } from "../utils/animateCounters";
import Brazil from "@react-map/brazil";

const App: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [mapSize, setMapSize] = useState(250); 

  useEffect(() => {
    animateCounters();

    
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMapSize(180); 
      } else if (window.innerWidth <= 480) {
        setMapSize(140);
      } else {
        setMapSize(250);
      }
    };

    
    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSelect(state: string): void {
    console.log("Estado selecionado:", state);
    setSelectedState(state);
  }

  return (
    <div>

    <br></br>
  
    <div className="max-w-4xl mx-auto p-6 pb-2 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-around border-b pb-4 gap-x-6">
        <img src="/img/amazonlogopreta.png" alt="Amazon" className="logo w-[200px] h-[200px]" />
        <div className="flex flex-col items-center">
          <p className="text-gray-700 text-3xl leading-relaxed font-bold">Amazon</p>
          <p className="text-gray-700 text-1xl leading-relaxed pb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nulla est, porttitor eget massa nec, vehicula maximus magna. Aenean efficitur tortor ac fringilla auctor. Etiam in eros ut velit sollicitudin tincidunt. Vestibulum lobortis quis dui quis semper. Phasellus vestibulum maximus tempor. Sed vel eros consequat, sodales turpis pharetra, molestie purus. In interdum porttitor urna, eu facilisis mauris interdum in. Suspendisse turpis neque, laoreet sed imperdiet mattis, venenatis pretium odio.
          </p>
        </div>
      </div>
 
      <h2 className="text-2xl font-bold mt-6 text-center border-b pb-6">IMPACTO DA EMPRESA</h2>
 
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="cidade bg-gray-300 p-10 shadow-lg rounded-lg text-center flex items-center justify-around col-span-2 gap-x-6 transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/mapaicon.png" alt="Ícone" className="w-24 h-24" />
          <div className="cidadetext flex flex-col items-center">
            <p className="text-gray-800 text-[50px] font-bold counter" data-count="125000">0</p>
            <p className="font-semibold text-[20px]">CIDADES ATENDIDAS</p>
          </div>
          <img src="/img/mapaicon.png" alt="Ícone" className="w-24 h-24" />
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
 
        <div className="bg-gray-300 p-10   rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/usuarioicon.png" alt="Ícone" className="w-32 h-32 custom-absolute" />
          <div className="text-left">
            <p className="text-gray-800 text-[50px] font-bold counter" data-count="1200">0</p>
            <p className="font-semibold text-[17px]">USUÁRIOS TOTAIS</p>
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
 
        <div className="bg-gray-300 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/afiliados.png" alt="Ícone" className="w-32 h-32 custom-absolute" />
          <div className="text-left">
            <p className="text-gray-800 text-[50px] font-bold counter" data-count="800">0</p>
            <p className="font-semibold text-[17px]">AFILIADOS TOTAIS</p>
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
 
        <div className="bg-gray-300 p-10 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/graficoicon.png" alt="Ícone" className="w-24 h-24 custom-absolute2" />
          <div className="text-left">
            <p className="text-gray-800 text-[50px] font-bold counter" data-count="75" data-suffix="%">0%</p>
            <p className="font-semibold text-[17px]">CRESCIMENTO MÉDIO</p>
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
 
        <div className="bg-gray-300 p-10 rounded-lg shadow-md flex justify-start relative transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute top-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
          <img src="/img/shopping-store.png" alt="Ícone" className="w-32 h-32 custom-absolute" />
          <div className="text-left">
            <p className="text-gray-800 text-[50px] font-bold counter" data-count="150">0</p>
            <p className="font-semibold text-[17px]">LOJAS CRIADAS</p>
          </div>
          <div className="absolute bottom-3 left-3 right-3 h-1 bg-blue-950 rounded-full"></div>
        </div>
 
        <div className="mapa bg-gray-300 p-6 rounded-lg shadow-md text-center justify-around flex items-center col-span-2 relative ">
        <div className="mapatext flex flex-col items-center justify-center gap-y-4">
            <p className="text-gray-800 text-8xl font-bold counter" data-count="5569">0</p>
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
 
export default App;

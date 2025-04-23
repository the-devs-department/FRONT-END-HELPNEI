import React from "react";
import LogoHelpnei from '../../images/HelpneiLogo.webp'
import './Home.css'
import mercedes from '../../images/mercedes.png'
import audi from '../../images/audi.png'
import cunzolo from '../../images/cunzolo.png'
import johnson from '../../images/johnson.png'
import bmw from '../../images/bmw.png'
import heineken from '../../images/heineken.png'
import nike from '../../images/nike.png'
import porsche from '../../images/porsche.png'
import amazon from '../../images/amazonlogopreta.png'


const Home :React.FC =  () => {
  const empresas = [
    { nome: 'Mercedes-Benz', logo: mercedes },
    { nome: 'Audi', logo: audi },
    { nome: 'Cunzolo', logo: cunzolo },
    { nome: 'Johnson & Johnson', logo: johnson },
    { nome: 'BMW', logo: bmw },
    { nome: 'Heineken', logo: heineken },
    { nome: 'Nike', logo: nike },
    { nome: 'Porsche', logo: porsche },
    {nome: 'Amazon', logo: amazon}
  ];

  return (
    <>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full h-[90%] flex flex-col items-center justify-center">
          <div className="company_group">
            {empresas.map((empresa) => (
              <div
                key={empresa.nome}
                className=":max-lg:w-[10rem] company shadow-lg bg-white shadow-md rounded-lg w-[25rem] h-[10rem] text-center flex items-center justify-center p-4 cursor-pointer"
              >
                <img src={empresa.logo} alt={empresa.nome} className="company_logo"/>
              </div>
            ))}
          </div>
        </div>
        <footer className="w-full bg-blue-900 p-2 flex items-center justify-center">
            <img src={LogoHelpnei} alt="" className='logo_helpnei'/>
        </footer>
      </div>
    </>
  );
};

export default Home;
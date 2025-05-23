import React, { useEffect, useState } from "react";
import LogoHelpnei from '../../images/logoHelpnei.webp';
import styles from './styles.module.css';
import { Link } from "react-router-dom";

interface Company {
  sponsorId: number;
  highSponsorLogo: string;
}

const Home: React.FC = () => {
  const [empresas, setEmpresas] = useState<Company[]>([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await fetch("http://localhost:3000/companies");
        const data = await response.json();

        // Filtra só os que têm logo
        const comLogo = data.filter((empresa: any) => empresa.highSponsorLogo);
        setEmpresas(comLogo);
      } catch (error) {
        console.error("Erro ao buscar empresas:", error);
      }
    };

    fetchEmpresas();
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full h-[90%] flex flex-col items-center justify-center">
          <div className={styles.company_group}>
            {empresas.map((empresa) => (
              <Link
                to={`/dashboard/${empresa.sponsorId}`}
                key={empresa.sponsorId}
                className={`max-lg:w-[10rem] ${styles.company} shadow-lg bg-white rounded-lg w-[25rem] h-[10rem] text-center flex items-center justify-center p-4 cursor-pointer`}
              >
                <img
                  src={empresa.highSponsorLogo}
                  alt={`Sponsor ${empresa.sponsorId}`}
                  className={styles.company_logo}
                />
              </Link>
            ))}
          </div>
        </div>
        <footer className="flex justify-center items-center w-full h-12 fixed bottom-0 left-0 bg-blue-950 text-white py-4">
          <img src={LogoHelpnei} alt="Logo Helpnei" className='h-[100%] object-contain' />
        </footer>
      </div>
    </>
  );
};

export default Home;
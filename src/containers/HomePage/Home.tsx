import React, { useEffect, useState } from "react";
import LogoHelpnei from '../../images/logoHelpnei.webp';
import styles from './styles.module.css';
import { useNavigate, Link } from "react-router-dom";


const Home: React.FC = () => {
  const [sponsors, setSponsors] = useState<any[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch("http://localhost:3000/companies");
        const data = await response.json();

        // Filtra os que têm highSponsorLogo
        const comLogo = data.filter((sponsor: any) => sponsor.highSponsorLogo);
        setSponsors(comLogo);
      } catch (error) {
        console.error("Erro ao buscar patrocinadores:", error);
      }
    };
  
    fetchSponsors();
  }, []);

  const rendaUsuario = (localStorage.getItem('renda') as 'ate1' | 'ate3' | 'mais3') || 'ate1';

  const podeVerSponsor = (rendaMinima: 'ate1' | 'ate3' | 'mais3') => {
    const prioridade = { ate1: 1, ate3: 2, mais3: 3 };
    return prioridade[rendaUsuario] >= prioridade[rendaMinima];
  };

  const sponsorsFiltrados = sponsors.filter((sponsor) => 
    podeVerSponsor(sponsor.rendaMinima)
  );

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between">
        <button
        onClick={handleLogout}
        className="absolute top-4 left-4 z-50 bg-[var(--color-blue-primary)] text-white font-bold px-4 py-2 rounded-md hover:text-blue-700 transition"
      >
        Sair
      </button>
        <div className="w-full h-[90%] flex flex-col items-center justify-center">
          <div className={styles.company_group}>
            {sponsorsFiltrados.length > 0 ? (
              sponsorsFiltrados.map((sponsor) => (
                <Link
                  to={`/dashboard/${sponsor.sponsorId}`}
                  key={sponsor.sponsorId}
                  className={`max-lg:w-[10rem] ${styles.company} shadow-lg bg-white rounded-lg w-[25rem] h-[10rem] text-center flex items-center justify-center p-4 cursor-pointer`}
                >
                  <img
                    src={sponsor.highSponsorLogo}
                    alt={`Sponsor ${sponsor.sponsorId}`}
                    className={styles.company_logo}
                  />
                </Link>
              ))
            ) : (
              <p className="text-gray-500">Nenhum patrocinador disponível para sua renda.</p>
            )}
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

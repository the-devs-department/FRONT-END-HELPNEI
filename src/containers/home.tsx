import mercedes from '../images/mercedes.png';
import audi from '../images/audi.png';
import cunzolo from '../images/cunzolo.png';
import johnson from '../images/johnson.png';
import bmw from '../images/bmw.png';
import heineken from '../images/heineken.png';
import nike from '../images/nike.png';
import porsche from '../images/porsche.png';

const Home = () => {
  const empresas = [
    { nome: 'Mercedes-Benz', logo: mercedes },
    { nome: 'Audi', logo: audi },
    { nome: 'Cunzolo', logo: cunzolo },
    { nome: 'Johnson & Johnson', logo: johnson },
    { nome: 'BMW', logo: bmw },
    { nome: 'Heineken', logo: heineken },
    { nome: 'Nike', logo: nike },
    { nome: 'Porsche', logo: porsche },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-blue-100 p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {empresas.map((empresa) => (
          <div
            key={empresa.nome}
            className="bg-white shadow-md rounded-lg p-4 w-36 h-20 flex items-center justify-center"
          >
            <img src={empresa.logo} alt={empresa.nome} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>

      <footer className="mt-10 text-center">
        <p className="text-sm text-gray-600">Helpnei</p>
      </footer>
    </div>
  );
};

export default Home;

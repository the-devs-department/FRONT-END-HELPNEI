import React from "react";

const Home = () => {
  const empresas = [
    "Mercedes-Benz",
    "Audi",
    "Cunzolo",
    "Johnson & Johnson",
    "BMW",
    "Heineken",
    "Nike",
    "Porsche",
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-blue-100 p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {empresas.map((empresa) => (
          <div
            key={empresa}
            className="bg-white shadow-md rounded-lg p-4 w-36 h-20 flex items-center justify-center text-center font-medium text-gray-800"
          >
            {empresa}
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

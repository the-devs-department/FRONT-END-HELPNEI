import React from "react";
import "../App.css";

const App: React.FC = () => {
  const bgColor = "bg-[#CFCFCF]";
  const sectionClasses = `${bgColor} shadow-lg p-6 rounded-lg text-center`;

  return (
    <div className="">
      {/* Navbar */}
      <div className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10">
        <button className="text-xl font-semibold focus:outline-none">Voltar</button>
      </div>

      {/* Conteúdo Principal */}
      <main className="flex flex-col items-center justify-center mt-20 space-y-8 my-12">
        {/* Empresa */}
        <div className="flex flex-wrap items-center justify-center space-x-8 border-b-8 border-black w-11/12 p-12"> 
          <img
            src="/img/amazonlogopreta.png"
            alt="Imagem da Empresa"
            className="w-40 h-40 object-contain"
          />
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900">Amazon</h1>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam voluptatum
              commodi dolor, ullam veritatis distinctio laborum doloremque veniam deleniti itaque
              impedit atque labore dicta dolore. Deserunt obcaecati hic adipisci?
            </p>
          </div>
        </div>

        {/* Impacto da Empresa */}
        <h2 className="text-3xl font-bold mt-8">IMPACTO DA EMPRESA</h2>

        {/* Estatísticas */}
        <div className={`${sectionClasses} w-full max-w-6xl`}>
          <div className="border-t-8 border-b-8 border-[#143357] flex items-center justify-between p-4 rounded-lg h-full">
            <h2 className="text-xl font-bold">CIDADES ATENDIDAS</h2>
            <p className="text-lg">--</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-8">
          <div className={sectionClasses}>
            <div className="border-t-8 border-b-8 border-[#143357] flex items-center justify-between p-4 rounded-lg h-full">
              <h2 className="text-xl font-bold">USUÁRIOS IMPACTADOS</h2>
              <p className="text-lg">--</p>
            </div>
          </div>
          <div className={sectionClasses}>
            <div className="border-t-8 border-b-8 border-[#143357] flex items-center justify-between p-4 rounded-lg h-full">
              <h2 className="text-xl font-bold">AFILIADOS TOTAIS</h2>
              <p className="text-lg">--</p>
            </div>
          </div>
          <div className={sectionClasses}>
            <div className="border-t-8 border-b-8 border-[#143357] flex items-center justify-between p-4 rounded-lg h-full">
              <h2 className="text-xl font-bold">CRESCIMENTO MÉDIO</h2>
              <p className="text-lg">--</p>
            </div>
          </div>

          {/* Lojas Criadas */}
          <div className={sectionClasses}>
            <div className="border-t-8 border-b-8 border-[#143357] flex items-center justify-center gap-10 p-4 rounded-lg h-full">
              <div>
                <h2 className="text-[100px] font-bold">12</h2>
                <h2 className="text-[24px] font-bold">LOJAS CRIADAS</h2>
              </div>
              <div>
                <img src="/img/shopping-store.png" alt="Loja Criada" />
              </div>
            </div>
          </div>

          <div className={sectionClasses}>
            <div className="border-t-8 border-b-8 border-[#143357] flex items-center justify-between p-4 rounded-lg h-full">
              <h2 className="text-xl font-bold">CIDADES ATINGIDAS</h2>
              <p className="text-lg">--</p>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white text-center p-4 bottom-0 left-0 w-full">
        <p className="text-sm">© 2025 Empresa Fictícia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;

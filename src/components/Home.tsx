export function HomePage() {
  return (
    <div className="w-screen bg-black">
      <div
        className="max-w-[1540px] h-screen mx-auto flex flex-row  bg-home  bg-cover bg-no-repeat
      "
      >
        <div className="text-white mt-[10rem] justify-start w-[30rem]">
          <h1 className="text-9xl">Nike</h1>
          <p className="text-2xl mt-[5rem]">
            Bem-vindo à loja de sapatos Nike, o lugar perfeito para encontrar o
            par de sapatos perfeito para suas necessidades. Nós nos orgulhamos
            de oferecer uma ampla variedade de sapatos da mais alta qualidade
            para homens, mulheres e crianças. Seja você um corredor experiente,
            um atleta amador ou apenas um amante de sapatos, temos o que você
            precisa.
          </p>
          <div className="mt-[5rem] relative z-20">
            <button
              className="px-[12rem] py-4 bg-white text-black font-bold
             rounded-[12px] hover:bg-transparent hover:border-white hover:border
            hover:text-white transition-colors "
            >
              produtos
            </button>
            {/* fix new button */}
          </div>
        </div>
      </div>
    </div>
  );
}

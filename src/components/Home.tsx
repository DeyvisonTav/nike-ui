"use client";
import { useScreenSize } from "@/utils/screen-size";
import { AboutUs } from "./AboutUs";

export function HomePage() {
  const { widthState } = useScreenSize();
  console.log(widthState);

  return (
    <div className="w-full bg-home bg-cover bg-no-repeat">
      <div
        className={`${widthState} h-screen mx-auto flex flex-row  
         `}
      >
        <div className="text-white mt-[14rem] justify-start w-[35rem]">
          <h1 className="text-8xl">Nike Shop</h1>
          <p className="text-2xl mt-[6rem]">
            Descubra o par perfeito na loja de sapatos Nike! Com uma variedade
            incomparável de sapatos de alta qualidade, para homens, mulheres e
            crianças, você encontrará a escolha ideal para suas necessidades e
            desejos. Nós unimos estilo e funcionalidade em nossos sapatos,
            garantindo conforto e durabilidade em todas as atividades.
            Experimente o que há de melhor em sapatos e escolha o seu par na
            nossa loja hoje mesmo!
          </p>
          <div className="mt-[6rem] relative z-20">
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

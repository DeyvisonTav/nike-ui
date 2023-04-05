"use client";
import { useScreenSize } from "@/utils/screen-size";
export function AboutUs() {
  const { widthState } = useScreenSize();
  return (
    <div className="w-full">
      <div className={`${widthState} mx-auto`}>
        <div className="flex flex-col">
          <p className="text-4xl pt-10">Sobre Nós</p>
          <div className="py-20">
            <video muted autoPlay loop>
              <source src="./video/videoNike.mp4" />
            </video>
          </div>
          <div>
            <p className="text-xl text-center">
              Bem-vindo à loja Nike Shop, onde acreditamos no poder do esporte
              para transformar vidas. Oferecemos produtos esportivos de alta
              qualidade e uma equipe pronta para ajudá-lo a encontrar o
              equipamento certo. Seja você um atleta ou buscando um estilo de
              vida saudável, estamos aqui para ajudá-lo. Obrigado por escolher a
              Nike Shop.
            </p>
          </div>

          <div
            className="flex flex-col space-y-5 justify-center text-center
             py-[8rem] items-center"
          >
            <p className="font-semibold text-2xl">Novo Nike Invicible 3</p>
            <h1 className="text-5xl font-bold uppercase">
              Sinta para acreditar
            </h1>
            <p className="text-lg">Muito amortecimento. Muitas sensações</p>
            <button
              className="text-white w-[23%] text-center items-center py-3 px-3
             bg-black rounded-full font-bold hover:bg-transparent hover:border-2
             hover:border-black hover:text-black transition-colors"
            >
              Ver Produtos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

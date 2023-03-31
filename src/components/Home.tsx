import Image from "next/image";
export function HomePage() {
  return (
    <div className="w-screen bg-black">
      <div
        className="max-w-[1540px] h-screen mx-auto flex flex-row
         justify-between"
      >
        <div className="text-white mt-[8rem]">
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
          </div>
        </div>
        <Image src={"/liquid.png"} width={1170} height={1167} alt="" />

        <Image
          className="absolute right-12 pr-[10rem]"
          src={"/liquidGlass.png"}
          width={940}
          height={940}
          alt=""
        />
        <Image
          className="absolute right-0 bottom-0  mb-20 mr-[45rem]"
          src={"/liquidGlass2.png"}
          width={320}
          height={230}
          alt=""
        />

        <Image
          className="absolute left-0 bottom-0 ml-[15rem] "
          src={"/liquidGlass3.png"}
          width={320}
          height={330}
          alt=""
        />
        <Image
          className="absolute left-0 bottom-0 ml-[4rem] "
          src={"/liquid2.png"}
          width={1000}
          height={1000}
          alt=""
        />
        <div className="absolute right-0 pr-[12rem] mt-16">
          <Image src={"/sapato.png"} width={950} height={675} alt="sapato" />
        </div>
      </div>
    </div>
  );
}

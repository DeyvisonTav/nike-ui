"use client";
import { useScreenSize } from "@/components/utils/screen-size";
import Image from "next/image";
import { TestmonialBox } from "./TestimonialBox";

export function Testimonials() {
  const { widthState } = useScreenSize();
  return (
    <div className="w-full h-screen max-h-[8p00px] pt-32">
      <div
        className={`${widthState} mx-auto bg-[#EAE7E9]  h-[700px] rounded-lg`}
      >
        <Image src="/quotate.png" alt={"aspas"} width={100} height={100} />
        <div className="w-full h-[400px]  mt-5 gap-2 items-end px-5 grid grid-cols-3">
          <TestmonialBox
            person="Maria Silva"
            text="Sou apaixonada pelos produtos da Nike! Os tênis são confortáveis e duráveis, e as roupas são estilosas e de alta qualidade. 
                         Recomendo a todos que buscam equipamentos esportivos de primeira linha."
          />

          <TestmonialBox
            person="João Santos"
            text="Comprei uma camiseta da Nike e fiquei impressionado com o conforto e a maciez do tecido. Além disso, a entrega foi rápida e o atendimento da loja foi excelente. Com certeza vou comprar mais produtos da Nike no futuro."
          />
          <TestmonialBox
            person="Fernanda Oliveira"
            text="A Nike é uma marca que sempre me surpreende com a variedade e qualidade de seus produtos. Desde tênis de corrida até roupas de treino, tudo o que eu preciso para me exercitar eu encontro na loja da Nike. E o melhor de tudo é que os preços são justos e acessíveis."
          />
        </div>
      </div>
    </div>
  );
}

"use client";
import "./styles.css";

import { BiShoppingBag } from "react-icons/bi";
import { useScreenSize } from "@/utils/screen-size";
export function HeaderPage() {
  const { widthState } = useScreenSize();
  return (
    <div className="w-full bg-black h-[80px] max-w-full text-[#d6d6d6] overflow-x-hiddenow-x: text-xl fixed z-20">
      <div
        className={`${widthState} h-full mx-auto flex items-center justify-between`}
      >
        <a href="#">
          <img src="/NikeLogo.png" alt="" />
        </a>

        <div className="flex items-center gap-[40px]">
          <a className="hover:text-white duration-500 nav" href="#">
            Home
          </a>
          <a className="hover:text-white hover:duration-500 nav" href="#">
            Sobre-nós
          </a>
          <a href="#" className="hover:text-white hover:duration-500 nav">
            Avaliações
          </a>
          <a href="#" className="hover:text-white hover:duration-500 nav">
            Produtos
          </a>
        </div>
        <div>
          <BiShoppingBag className="w-8 h-8 cursor-pointer hover:text-white hover:duration-500" />
        </div>
      </div>
    </div>
  );
}

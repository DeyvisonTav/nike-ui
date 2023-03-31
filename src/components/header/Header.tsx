import "./styles.css"

import { BiShoppingBag } from "react-icons/bi";

export function HeaderPage() {
  return (
    <div className="w-full bg-black h-[75px] max-w-full text-[#d6d6d6] overflow-x-hiddenow-x: text-xl fixed z-20">
      <div className="max-w-[1540px] h-full mx-auto flex items-center justify-between">
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
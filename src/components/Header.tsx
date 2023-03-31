import { BiShoppingBag } from "react-icons/bi"

export function HeaderPage() {
  return(
    <div className="w-full bg-black h-[75px] text-[#d6d6d6] text-xl fixed">
      <div className="max-w-[1540px] h-full mx-auto flex items-center justify-between">
        <a href="#">
          <img src="/NikeLogo.png" alt="" />
        </a>

        <div className="flex items-center gap-[40px]">
           <a 
           className="hover:text-white hover:duration-500"
           href="#">
              Sobre-nós
           </a>
           <a href="#"
           className="hover:text-white hover:duration-500">
              Avaliações
            </a>
            <a href="#"
            className="hover:text-white hover:duration-500">
              Produtos
            </a>
        </div>
        <div>
          <BiShoppingBag className="w-8 h-8 cursor-pointer hover:text-white hover:duration-500"/>
        </div>
      </div>
    </div>
  )
}
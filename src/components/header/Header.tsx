"use client";
import "./styles.css";

import { BiShoppingBag } from "react-icons/bi";
import { useScreenSize } from "@/components/utils/screen-size";
import Link from "next/link";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
export function HeaderPage() {
  const [cart, setCart] = useState(false)
  const { widthState } = useScreenSize();
  function handleClose(){
    setCart(false)
  }
  return (
    <div className="w-full bg-black h-[80px] max-w-full text-[#d6d6d6] overflow-x-hiddenow-x: text-xl fixed z-20">
      <div
        className={`${widthState} h-full mx-auto flex items-center justify-between`}
      >
        <Link href="/">
          <img src="/NikeLogo.png" alt="" />
        </Link>

        <div className="flex items-center gap-[40px]">
          <Link className="hover:text-white duration-500 nav" href="/">
            Home
          </Link>
          <Link className="hover:text-white hover:duration-500 nav" href="/">
            Sobre-nós
          </Link>
          <Link href="/" className="hover:text-white hover:duration-500 nav">
            Avaliações
          </Link>
          <Link
            href="/Products"
            className="hover:text-white hover:duration-500 nav"
          >
            Produtos
          </Link>
        </div>    
          <BiShoppingBag 
          className="w-8 h-8 cursor-pointer hover:text-white hover:duration-500"
          onClick={() => setCart(true)}
          />
          
      </div>
      <Cart 
        isOpen ={cart}
        handleClose={handleClose}
      />
    </div>
  );
}

'use client'
import {BsChevronDoubleRight} from "react-icons/bs"


export function Cart({isOpen, handleClose}: CartProps){
    return(
        <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} duration-500 w-screen h-screen flex fixed z-30`}>
            <div className="w-[55%] h-full bg-black opacity-90">

            </div>
            <div className="w-[45%] h-full bg-white">
                <div className="text-black w-full justify-end">
                   <BsChevronDoubleRight 
                   className="w-8 h-8 m-4 cursor-pointer"
                    onClick={handleClose}/>
                </div>
            </div>
        </div>
    )
}
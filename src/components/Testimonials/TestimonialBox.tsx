import { TestimonialBoxProps } from "./@types";


export function TestmonialBox({image, person, text}: TestimonialBoxProps){
    return (
        <div className="h-5/6 bg-black rounded-lg text-white">
            <div 
            className="w-32 h-32 left relative -top-16 border-2 border-white mx-auto bg-blue-500 rounded-full"/>
            <h3 className="w-full text-2xl text-center">
            {person}
            </h3>
            <p className="w-full px-10 text-center">
            {text}
            </p>
        </div>
    )
}
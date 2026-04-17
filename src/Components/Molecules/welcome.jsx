import fontStyle from "../Styles/fonts.module.css"
import { useState } from "react";
import { useEffect } from "react";
import clip from "../../../public/icons/clip.png"
import whatsapp from "../../../public/icons/whatsapp.png"
import admin from "../../../public/icons/admin.png"
import CarruselIcons from "./carruselIcons";
import Line from "../Atoms/Line";
import refresco from "../../../public/refresco.png"
import CarruselImagenes from "./carruselImagenes";
import styleAnimation from "../Styles/animation.module.css"
import styleResponsive from "../Styles/responsive.module.css"
import ScrollReveal from "../Atoms/ScrollReveal";

function Welcome(){
    const colorWords = ["#F66055", "#8DB6EC", "#F3D74B"]; 
    const words = ["ESCUELA", "OFICINA", "CREATIVIDAD"];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);
  
    useEffect(() => {
      const currentWord = words[currentWordIndex];
      let timeout;
  
      if (isDeleting) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => currentWord.slice(0, prev.length + 1)); 
        }, typingSpeed);
      }
  

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
  
      return () => clearTimeout(timeout); 
    }, [displayText, isDeleting, words, currentWordIndex, typingSpeed]);
    return(
        <>
        <ScrollReveal animation="fade-right">
        <section className="flex-col pt-16 px-6 md:px-32 md:pt-20" id="presentacion">
    {/* RESPONSIVO - en mobile columna, en desktop fila */}
    <div className="flex flex-col md:flex-row md:justify-between">
        <div>
            <img src={clip} alt="" className="w-7"/>
            {/* RESPONSIVO - texto más pequeño en mobile */}
            <div className="flex gap-3 mt-1 flex-wrap">
                <p id={fontStyle.passionOne} className="text-[#EAC58A] text-3xl md:text-5xl">TODO PARA TU</p>
                <span id={fontStyle.passionOne} className="text-3xl md:text-5xl" style={{ color: colorWords[currentWordIndex] }}>
                    {displayText}
                </span>
            </div>

            <div className="flex flex-col gap-4 mt-5">
                {/* RESPONSIVO - texto más corto en mobile */}
                <p className="text-[2.5vh] md:text-[3vh] text-[#0000007f] max-w-[38ch] leading-7">
                    Materiales de calidad, precios accesibles y el trato que te mereces
                </p>
                <p className="text-[2.5vh] md:text-[3vh] text-[#0000007f] max-w-[38ch] leading-7">
                    Materiales, regalos, snacks y productos en un solo lugar
                </p>
            </div>

            <div className="flex gap-6 mt-2">
                <div className={`w-10 h-[0.3vh] bg-[#D5F068] mt-5 ${styleAnimation.line} ${styleAnimation.line1}`}></div>
                <div className={`w-10 h-[0.3vh] bg-[#90DE99] mt-5 ${styleAnimation.line} ${styleAnimation.line2}`}></div>
                <div className={`w-10 h-[0.3vh] bg-[#1D07DD] mt-5 ${styleAnimation.line} ${styleAnimation.line3}`}></div>
                <div className={`w-10 h-[0.3vh] bg-[#952BFF] mt-5 ${styleAnimation.line} ${styleAnimation.line4}`}></div>
                <div className={`w-10 h-[0.3vh] bg-[#DC098E] mt-5 ${styleAnimation.line} ${styleAnimation.line5}`}></div>
                <div className={`w-10 h-[0.3vh] bg-[#fe9a04] mt-5 ${styleAnimation.line} ${styleAnimation.line6}`}></div>
                <div className={`w-10 h-[0.3vh] bg-[#ED6C10] mt-5 ${styleAnimation.line} ${styleAnimation.line7}`}></div>
                <div className={`w-10 h-[0.3vh] bg-[#EAB11C] mt-5 ${styleAnimation.line} ${styleAnimation.line8}`}></div>
            </div>

            <button className="bg-[#3cd94e] text-white p-5 px-7 rounded-full mt-5 
                flex max-w-max justify-center gap-2 font-medium hover:bg-[#4be65d] cursor-pointer duration-100"
                onClick={() => window.open('https://wa.me/529711637722', '_blank')}>
                Whatsapp
                <img src={whatsapp} alt="logoWhatsapp" className="size-6 hover:animate-bounce"/>
            </button>

            <div className="flex gap-2 mt-5">
                <img src={admin} alt="logoAdmin" className="size-5" />
                <p className="text-[#0000007f]">Mas de 7 años atendiendo</p>
            </div>
        </div>

        {/* RESPONSIVO - carrusel debajo del texto en mobile */}
        <div className="mt-8 md:mt-0">
            <CarruselImagenes />
        </div>
    </div>

    <CarruselIcons />
</section>
        </ScrollReveal>
            <Line></Line>
        </>
    )
}
export default Welcome;
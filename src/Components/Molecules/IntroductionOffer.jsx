import styleFont from "../Styles/fonts.module.css"
import porcentaje from "../../../public/icons/porcentaje.png"
import CardsOffer from "./CardsOffer"
import Line from "../Atoms/Line"
import ScrollReveal from "../Atoms/ScrollReveal";

function IntroductionOffer(){
    return(
        <ScrollReveal animation="fade-left">
            <div className="flex justify-center p-5 sm:p-10  items-center gap-5">
                <div className="flex flex-col text-center">
                <p id={styleFont.passionOne} className="text-[6vh] text-[#E7A372] sm:text-5xl text-start sm:text-center">LO QUE OFRECEMOS</p>
                <p className="text-[2.7vh] mt-1 opacity-50 sm:text-2xl text-start sm:text-center">Encuentra todo lo que necesitas en una sola visita</p>
                </div>

                <div>
                    <img src={porcentaje} alt="ofrecemos" className="size-20 shrink-0 animate-bounce" />
                </div>
            </div>
            <CardsOffer></CardsOffer>
            <div className="mt-10">
                <Line></Line>
            </div>
        </ScrollReveal>
    )
}
export default IntroductionOffer;
import styleFont from "../Styles/fonts.module.css"
import galeria from "../../../public/icons/galeria.png"
import Line from "../Atoms/Line"
import Galery from "./Galery";
import ScrollReveal from "../Atoms/ScrollReveal";

function IntroductionGalery(){
    return(
        <ScrollReveal animation="blur-in">
                <div className="flex flex-col md:flex-row justify-center p-6 md:p-10 items-center gap-3 md:gap-5 text-center md:text-left">
                    <div className="flex flex-col text-center">
                        <p id={styleFont.passionOne} className="text-3xl md:text-5xl text-[#85E490]">
                            GALERIA
                        </p>
                    </div>
                    <div>
                        <img src={galeria} alt="galeria" className="size-14 md:size-20 animate-bounce" />
                    </div>
                </div>
                <Galery></Galery>
                <Line></Line>
        </ScrollReveal>
    )
}
export default IntroductionGalery;
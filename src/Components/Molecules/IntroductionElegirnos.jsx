import styleFont from "../Styles/fonts.module.css"
import estrella from "../../../public/estrella.png"
import ScrollReveal from "../Atoms/ScrollReveal";

function IntroductionElegirnos(){
    return(
        <ScrollReveal animation="scale-up">
            <div className="flex flex-col md:flex-row justify-center p-6 md:p-10 items-center gap-3 md:gap-5 text-center md:text-left">
                <div className="flex flex-col text-center">
                    <p id={styleFont.passionOne} className="text-3xl md:text-5xl text-[#CEDBA3]">
                        ¿PORQUE ELEGIRNOS?
                    </p>
                    <p className="text-lg md:text-2xl mt-1 opacity-50">
                        Más que una papelería, tu tienda de confianza
                    </p>
                </div>
                <div>
                    <img src={estrella} alt="estrella" className="size-14 md:size-20 animate-bounce" />
                </div>
            </div>
        </ScrollReveal>
    )
}
export default IntroductionElegirnos;
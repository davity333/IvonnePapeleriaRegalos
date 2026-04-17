import styleFont from "../Styles/fonts.module.css"
import estrella from "../../../public/estrella.png"
import ScrollReveal from "../Atoms/ScrollReveal";

function IntroductionElegirnos(){
    return(
        <ScrollReveal animation="scale-up">
            <div className="flex md:flex-row justify-between md:justify-center p-5 sm:p-10 items-center gap-3 md:gap-5 text-center md:text-left">
                <div className="flex flex-col text-center">
                    <p id={styleFont.passionOne} className="text-[6vh] text-[#CEDBA3] sm:text-5xl text-start sm:text-center">
                        ¿PORQUE ELEGIRNOS?
                    </p>
                    <p className="text-[2.7vh] mt-1 opacity-50 sm:text-2xl text-start sm:text-center">
                        Más que una papelería, tu tienda de confianza
                    </p>
                </div>
                <div>
                    <img src={estrella} alt="estrella" className="size-14 md:size-20 shrink-0 animate-bounce" />
                </div>
            </div>
        </ScrollReveal>
    )
}
export default IntroductionElegirnos;
import styleFont from "../Styles/fonts.module.css"
import localizacion from "../../../public/icons/localizacion.png"
import localizacionWhite from "../../../public/icons/localizacionWhite.png"
import Line from "../Atoms/Line"
import ScrollReveal from "../Atoms/ScrollReveal";

function Location() {
    return (
        <ScrollReveal>
            <section className="flex flex-col sm:flex-row justify-between mt-5 gap-10">
                <div className="flex flex-col w-full">
                    <div className="flex">
                        <p id={styleFont.passionOne} className="text-3xl md:text-5xl text-[#6ABDF4]">
                            UBICACIÓN
                        </p>
                        <img src={localizacion} alt="localizacion" className="size-14 md:size-20 animate-bounce" />
                    </div>

                    <div>
                        <p id={styleFont.jockey} className="text-[4vh] text-[#8A8C93]">Dirección</p>
                        <p className="opacity-60 text-[2.7vh] max-w-[38ch] leading-7">
                            Chiapas 305-301, Hidalgo Poniente, 70610 Salina Cruz, Oax.
                        </p>
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <p className="text-[3vh] font-bold text-[#5d5f60]">Lunes - Sabado:</p>
                            <p className="opacity-60 text-[2.7vh] leading-7">8:00 am - 8:30 pm</p>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <p className="text-[3vh] font-bold text-[#5d5f60]">Domingo:</p>
                            <p className="opacity-60 text-[2.7vh] leading-7">8:00 am - 2:00 pm</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-6">
                        <p id={styleFont.jockey} className="text-[4vh] text-[#8A8C93]">Nota</p>
                        <p className="opacity-60 text-[2.7vh] max-w-[38ch] sm:max-w-full leading-7">
                            Los horarios pueden variar en días festivos.
                        </p>
                        <p className="opacity-60 text-[2.7vh] max-w-[38ch] leading-7 mt-3">
                            No hacemos entregas a domicilio, pero puedes pasar por tus productos o encargarlos por WhatsApp y recogerlos.
                        </p>

                        <a 
                            href="https://www.google.com/maps/..."
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#DE9092] text-white p-5 px-7 rounded-full mt-7
                                    flex max-w-max items-center gap-2 font-medium hover:bg-[#c76f72] cursor-pointer duration-100">
                            Abrir en Google Maps
                            <img src={localizacionWhite} alt="logoLocalizacion" className="size-6" />
                        </a>
                    </div>
                </div>

                <div className="w-full sm:w-auto">
                    <iframe 
                        className="drop-shadow-2xl rounded-3xl 
                                w-full h-[50vh] 
                                sm:w-[110vh] sm:h-[75vh] 
                                mt-5 sm:mt-0"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d402.71414694004557!2d-95.20739745065653!3d16.205821047510653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1775625477187!5m2!1ses-419!2smx"
                    ></iframe>
                </div>
            </section>

            <div className="mt-10">
                <Line></Line>
            </div>
        </ScrollReveal>
    )
}
export default Location;
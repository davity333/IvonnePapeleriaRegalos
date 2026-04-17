import styleFont from "../Styles/fonts.module.css"
import localizacion from "../../../public/icons/localizacion.png"
import localizacionWhite from "../../../public/icons/localizacionWhite.png"
import Line from "../Atoms/Line"
import ScrollReveal from "../Atoms/ScrollReveal";

function Location() {
    return (
        <ScrollReveal>
            <section className="flex justify-between sm:flex-row flex-col mt-5">
                <div className="flex flex-col">
                    <div className="flex">
                        <p id={styleFont.passionOne} className="text-3xl md:text-5xl text-[#6ABDF4]">
                            UBICACIÓN
                        </p>
                        <div>
                            <img src={localizacion} alt="localizacion" className="size-14 md:size-20 animate-bounce" />
                        </div>

                    </div>
                    <div>
                        <p id={styleFont.jockey} className="text-[4vh] text-[#8A8C93]">Dirección</p>
                        <p className="opacity-60 text-[2.7vh] max-w-[38ch] leading-7">Chiapas 305-301, Hidalgo Poniente, 70610 Salina Cruz, Oax.</p>
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="flex items-center gap-0 sm:gap-3">
                            <p className="text-[3vh] font-bold text-[#5d5f60]">Lunes - Sabado: </p>
                            <p className="opacity-60 text-[2.7vh] max-w-[38ch] leading-7">8:00 am - 8:30 pm</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-[3vh] font-bold text-[#5d5f60]">Domingo: </p>
                            <p className="opacity-60 text-[2.7vh] max-w-[38ch] leading-7">8:00 am - 2:00 pm</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-6">
                        <p id={styleFont.jockey} className="text-[4vh] text-[#8A8C93]">Nota</p>
                        <p className="opacity-60 text-[2.7vh] max-w-[38ch] leading-7">Los horarios pueden variar en días festivos.</p>
                        <p className="opacity-60 text-[2.7vh] max-w-[38ch] leading-7 mt-3">No hacemos entregas a domicilio, pero puedes pasar por tus productos o encargarlos por WhatsApp y recogerlos.</p>

                        <a 
                            href="https://www.google.com/maps/@16.2057325,-95.2074197,3a,75y,8.47h,90t/data=!3m7!1e1!3m5!1sO0b-rPxUUbb-bXaUKrcncQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DO0b-rPxUUbb-bXaUKrcncQ%26yaw%3D8.471993!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#DE9092] text-white p-5 px-7 rounded-full mt-7
                                       flex max-w-max items-center gap-2 font-medium hover:bg-[#c76f72] cursor-pointer duration-100">
                            Abrir en Google Maps
                            <img src={localizacionWhite} alt="logoLocalizacion" className="size-6" />
                        </a>


                    </div>
                </div>
                <div>
                    <iframe className="drop-shadow-2xl rounded-3xl h-[40vh] w-[40vh] sm:w-[110vh] sm:h-[75vh] mt-5 sm:mt-0"
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
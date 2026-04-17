import styleFont from "../Styles/fonts.module.css"
import whatsappGris from "../../../public/icons/whatsappGris.png"
import corazon from "../../../public/icons/corazon.png"
import calendario from "../../../public/icons/calendario.png"
function Footer(){
    return(
        <footer className="bg-[#F7F5F0] border-t border-gray-200 mt-16 px-6 md:px-24 py-12">
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                {/* COLUMNA 1 - nombre y descripcion */}
                <div className="flex-1">
                    <p id={styleFont.jockey} className="text-2xl text-[#B3AC89] mb-3">
                        IVONNE PAPELERÍA Y REGALOS
                    </p>
                    <p className="opacity-50 text-sm max-w-[32ch] leading-6">
                        Atención personalizada para tus necesidades escolares, de oficina y del hogar.
                    </p>

                    {/* CORAZON ANIMADO */}
                    <div className="flex items-center gap-2 mt-5">
                        <img 
                            src={corazon} 
                            alt="corazon" 
                            className="w-5 animate-pulse"
                        />
                        <p className="text-sm opacity-40">Oaxaca</p>
                    </div>
                </div>

                {/* COLUMNA 2 - horario */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={calendario} alt="calendario" className="w-5 opacity-60" />
                        <p id={styleFont.jockey} className="text-lg text-[#8A8C93]">Horario</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm opacity-50">
                        <div className="flex justify-between max-w-[22ch]">
                            <p>Lunes - Sábado</p>
                            <p>8:00 - 8:30 pm</p>
                        </div>
                        <div className="flex justify-between max-w-[22ch]">
                            <p>Domingo</p>
                            <p>8:00 - 2:00 pm</p>
                        </div>
                    </div>
                </div>

                {/* COLUMNA 3 - contacto */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                        <img 
                            src={whatsappGris} 
                            alt="whatsapp" 
                            className="w-5 opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200"
                        />
                        <p id={styleFont.jockey} className="text-lg text-[#8A8C93]">Contacto</p>
                    </div>
                    <a 
                        href="https://wa.me/529711637722" 
                        target="_blank"
                        className="text-sm opacity-50 hover:opacity-100 hover:text-[#28E63E] transition-all duration-200"
                    >
                        971 163 7722
                    </a>
                </div>

            </div>

            {/* LINEA DIVISORA */}
            <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
                
                <p className="text-xs opacity-30">© 2026 Ivonne Papelería y Regalos. Todos los derechos reservados.</p>

                {/* CORAZON PEQUEÑO PULSANDO */}
                <div className="flex items-center gap-1 text-xs opacity-30">
                    <p>Hecho con</p>
                    <img src={corazon} alt="corazon" className="w-3 animate-ping" />
                    <p>en México</p>
                </div>

            </div>

        </footer>
    )
}
export default Footer;
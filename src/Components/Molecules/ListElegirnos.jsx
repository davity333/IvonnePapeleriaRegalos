import tienda from "../../../public/tienda.png"
import fontStyle from "../Styles/fonts.module.css"
import caja from "../../../public/icons/caja.png"
import etiqueta from "../../../public/icons/etiqueta.png"
import whatsappGris from "../../../public/icons/whatsappGris.png"
import Line from "../Atoms/Line"
import car from "../../../public/icons/carro.png"
import ScrollReveal from "../Atoms/ScrollReveal"

function ListElegirnos(){
    const list = [
        {
            title: "Variedad de productos",
            description: "Desde útiles escolares hasta regalos, galletas, sabritas y refrescos",
            icon: caja,
            color: "#868DE3"
        },
        {
            title: "Precios justos",
            description: "Calidad y economía en cada producto, sin sorpresas",
            icon: etiqueta,
            color: "#EAB93E"
        },
        {
            title: "Atención por WhatsApp",
            description: "Consulta precios, disponibilidad o encarga trabajos de computadora",
            icon: whatsappGris,
            color: "#28E63E"
        }
    ]

    return(
        <ScrollReveal animation="fade-right">
        {/* RESPONSIVO - columna en mobile, fila en desktop */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 pb-8 px-4 md:px-0">

            {/* RESPONSIVO - imagen ocupa ancho completo en mobile */}
            <div className="w-full md:w-auto">
                <img 
                    src={tienda} 
                    alt="tienda" 
                    className="w-full md:w-[113vh] h-[30vh] md:h-[53vh] object-cover rounded-lg md:rounded-none"
                />
            </div>

            {/* RESPONSIVO - lista centrada en mobile */}
            <div className="flex flex-col gap-8 md:gap-10 items-start w-full md:w-auto px-2 md:px-0">
                {list.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="flex items-center gap-3">
                            <div 
                                className="w-2 h-2 rounded-full flex-shrink-0" 
                                style={{ backgroundColor: item.color }}
                            />
                            <div className="flex items-center gap-4 md:gap-7">
                                <div>
                                    <p 
                                        id={fontStyle.jockey} 
                                        className="text-2xl md:text-3xl"
                                        style={{ color: item.color }}
                                    >
                                        {item.title}
                                    </p>
                                    <div 
                                        className="w-full md:w-72 h-[0.2vh]" 
                                        style={{ backgroundColor: item.color }}
                                    />
                                </div>
                                <img src={item.icon} alt="icon" className="w-7 md:w-9 opacity-70" />
                            </div>
                        </div>
                        <div className="ml-5">
                            {/* RESPONSIVO - texto más corto en mobile */}
                            <p className="max-w-[32ch] md:max-w-[38ch] leading-5 text-[#000000c2] text-sm md:text-base">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>

        <marquee behavior="scroll" scrollamount="15" direction="right">
            <img src={car} alt="carro" className="w-10" />
        </marquee>
        <Line />
        </ScrollReveal>
    )
}
export default ListElegirnos;
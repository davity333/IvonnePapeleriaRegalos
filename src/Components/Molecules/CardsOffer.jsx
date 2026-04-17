import libro from "../../../public/icons/cuadernoWhite.png"
import lapiz from "../../../public/icons/lapizWhite.png"
import impresora from "../../../public/icons/impresoraWhite.png"
import regalo from "../../../public/icons/regaloWhite.png"
import galleta from "../../../public/icons/galletaWhite.png"
import teddy from "../../../public/icons/teddy.png"
import maquillaje from "../../../public/icons/maquillajeWhite.png"
import usb from "../../../public/icons/usbWhite.png"
import estrellitas from "../../../public/icons/estrellitasWhite.png"

function CardsOffer(){

    const card = [
        {
            img: libro,
            descripcion: "Útiles escolares y oficina",
            primerColor: "#5DADE2",
            segundoColor: "#6ABDF4"
        },
        {
            img: lapiz,
            descripcion: "Plumas, lápices, marcadores y colores",
            primerColor: "#90DE99",
            segundoColor: "#AEEAB5"
        },
        {
            img: impresora,
            descripcion: "Copias, impresiones y trabajos de computadora",
            primerColor: "#A9AFC1",
            segundoColor: "#C4CBE0"
        },
        {
            img: regalo,
            descripcion: "Regalos y manualidades",
            primerColor: "#ED7190",
            segundoColor: "#F599B0"
        },
        {
            img: galleta,
            descripcion: "Snacks: galletas, sabritas y refrescos",
            primerColor: "#B89880",
            segundoColor: "#DDB89C"
        },
        {
            img: teddy,
            descripcion: "Peluches",
            primerColor: "#F1CA76",
            segundoColor: "#FFDC82"
        },
        {
            img: maquillaje,
            descripcion: "Maquillaje",
            primerColor: "#DF71ED",
            segundoColor: "#E79AF0"
        },
        {
            img: usb,
            descripcion: "Grabación de música",
            primerColor: "#48E6CC",
            segundoColor: "#80FFEA"
        }
    ]

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-10 xl:px-24 py-6">
            {card.map((item, i) => (
                <div
                    key={i}
                    className="relative w-full h-[160px] sm:h-[180px] rounded-3xl shadow-xl flex flex-col justify-between p-4 overflow-hidden"
                    style={{ backgroundColor: item.primerColor }}
                >

                    <div
                        className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 rounded-bl-[100px]"
                        style={{
                            background: `linear-gradient(135deg, ${item.segundoColor}, ${item.primerColor})`
                        }}
                    />

                    <img 
                        src={estrellitas}
                        className="absolute top-2 right-2 w-5 sm:w-6 opacity-80"
                    />

                    <div className="relative z-10">
                        <img 
                            src={item.img} 
                            alt="icon"
                            className="w-12 h-12 sm:w-14 sm:h-14 p-2 sm:p-3 rounded-2xl"
                            style={{ backgroundColor: item.segundoColor }}
                        />
                    </div>

                    <p className="relative z-10 text-white text-2xl sm:text-[2.5vh] font-medium leading-tight">
                        {item.descripcion}
                    </p>

                </div>
            ))}
        </div>
    )
}

export default CardsOffer
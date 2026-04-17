import style from "../Styles/animation.module.css"
import lapiz from "../../../public/icons/lapiz.png" 
import cuaderno from "../../../public/icons/cuaderno.png"
import regalo from "../../../public/icons/regalo.png"
import galleta from "../../../public/icons/galleta.png"
import labial from "../../../public/icons/labial.png"
import documento from "../../../public/icons/documento.png"
import soda from "../../../public/icons/soda.png"
import impresora from "../../../public/icons/impresora.png"
import peluche from "../../../public/icons/peluche.png"
import juguete from "../../../public/icons/juguete.png"

const icons = [lapiz, cuaderno, regalo, galleta, labial, documento, soda, impresora, peluche, juguete]

function CarruselIcons(){
    return(
        /* RESPONSIVO - ocupa todo el ancho en cualquier pantalla */
        <div className={`${style.carousel} w-full`}>
            <div className={style.group}>
                {/* PRIMERA MITAD */}
                {icons.map((icon, i) => (
                    <img key={i} src={icon} className={style.card} />
                ))}
                {/* SEGUNDA MITAD DUPLICADA */}
                {icons.map((icon, i) => (
                    <img key={`dup-${i}`} src={icon} className={style.card} />
                ))}
            </div>
        </div>
    )
}
export default CarruselIcons;
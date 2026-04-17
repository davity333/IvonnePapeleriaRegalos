import regalo from "../../../public/regalo.png"
import engrapadora from "../../../public/engrapadora.png"
import impresora from "../../../public/impresora.png"
import lapices from "../../../public/lapices.png"
import refresco from "../../../public/refresco.png"
import styleCarousel from "../Styles/carrusel3d.module.css"

function CarruselImagenes(){
    return(
        /* RESPONSIVO - en mobile se centra y reduce, en desktop va a la derecha */
        <div className="flex justify-center md:justify-end w-full md:w-auto">
            <div className={styleCarousel.stack}>
                <img src={regalo} className={`${styleCarousel.image} ${styleCarousel.img1}`} />
                <img src={engrapadora} className={`${styleCarousel.image} ${styleCarousel.img2}`} />
                <img src={impresora} className={`${styleCarousel.image} ${styleCarousel.img3} ${styleCarousel.imgLeather}`} />
                <img src={lapices} className={`${styleCarousel.image} ${styleCarousel.img4}`} />
                <img src={refresco} className={`${styleCarousel.image} ${styleCarousel.img5}`} />
            </div>
        </div>
    )
}
export default CarruselImagenes
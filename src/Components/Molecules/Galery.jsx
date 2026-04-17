import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import botonIzquierda from "../../../public/icons/botonIzquierdo.png"
import botonDerecho from "../../../public/icons/botonDerecho.png"
import tienda from "../../../public/tienda.png"
import x from "../../../public/icons/x.png"
import style from "../Styles/carruselGaleria.module.css"
import Line from "../Atoms/Line";

//imganes de la tineda
import utiles from "../../../public/fotosTienda/utiles.png"
import almacen from "../../../public/fotosTienda/almacen.png"
import sabritas from "../../../public/fotosTienda/sabritas.png"
import refrescos from "../../../public/fotosTienda/refrescos.png"
import jugos from "../../../public/fotosTienda/jugos.png"
import regalos from "../../../public/fotosTienda/regalos.png"
import cuadernos from "../../../public/fotosTienda/cuadernos.png"
import tiendaDentro from "../../../public/fotosTienda/tiendaDentro.png"
import peluches from "../../../public/fotosTienda/peluches.png"
function Galery(){

    const carrusel = [
        { image: utiles, titulo: "Utiles escolares" },
        { image: almacen, titulo: "Materiales para manualidades" },
        { image: sabritas, titulo: "Snacks" },
        { image: refrescos, titulo: "Refrescos" },
        { image: jugos, titulo: "Jugos y chocolates" },
        { image: regalos, titulo: "Regalos" }
    ]

    const collage = [
        { id: 1, image: tiendaDentro, titulo: "Bienvenida a nuestra tienda" },
        { id: 2, image: cuadernos, titulo: "Cuadernos" },
        { id: 3, image: peluches, titulo: "Peluches" }
    ]

    const [index, setIndex] = useState(0)
    const [modal, setModal] = useState(null)

    // Carrusel infinito
    const [visible, setVisible] = useState(3)

useEffect(() => {
    const updateVisible = () => {
        if (window.innerWidth < 600) setVisible(1)
        else if (window.innerWidth < 900) setVisible(2)
        else setVisible(3)
    }

    updateVisible()
    window.addEventListener("resize", updateVisible)
    return () => window.removeEventListener("resize", updateVisible)
}, [])

const next = () => {
    setIndex((prev) => 
        prev >= carrusel.length - visible ? 0 : prev + 1
    )
}

const prev = () => {
    setIndex((prev) => 
        prev === 0 ? carrusel.length - visible : prev - 1
    )
}

    // ESC para cerrar modal
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setModal(null)
        }
        window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [])

    // Bloquear scroll cuando el modal está abierto
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [modal]);

    return(
       <section className="px-2  md:px-24">
            <div className={style.container}>

                    {/* 🔴 CARRUSEL */}
                    <div className={style.carrusel}>

                        <button onClick={prev} className={style.btnLeft}>
                            <img src={botonIzquierda} />
                        </button>

                        <div className={style.viewport}>
                            <div 
                                className={style.track}
                                style={{
                                    transform: `translateX(-${index * (100/visible)}%)`,
                                    "--visible": visible
                                }}
                            >
                                {carrusel.map((item, i) => (
                                    <div 
                                        key={i} 
                                        className={style.card}
                                        onClick={() => setModal(item)} // 🔥 modal también aquí
                                    >
                                        <img
                                            className="cursor-pointer transition-transform duration-300 hover:scale-105"
                                            src={item.image} 
                                            alt="imagen"
                                        />
                                        <p className={style.descripcion}>{item.titulo}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button onClick={next} className={style.btnRight}>
                            <img src={botonDerecho} />
                        </button>

                    </div>


                    {/* 🟢 COLLAGE */}
                    <div className={style.collage}>
                        <div className={style.big}
                            onClick={() => setModal(collage[0])}>
                            <img src={collage[0].image} 
                                className="cursor-pointer 
                                transition-transform duration-300 hover:scale-[0.98]"
                            />
                        </div>

                        <div className={style.right}>
                            {collage.slice(1).map(item => (
                                <div key={item.id}
                                    onClick={() => setModal(item)}>
                                    <img src={item.image} 
                                        className="cursor-pointer transition-transform duration-300 hover:scale-[0.98]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* 🔵 MODAL */}
                    {modal && createPortal(
                        <div className={style.modal} onClick={() => setModal(null)}>
                            <div className={style.modalContent} onClick={(e)=>e.stopPropagation()}>
                                
                                <button className={style.close} onClick={()=>setModal(null)}>
                                    <img src={x}/>
                                </button>

                                <img src={modal.image} className={style.modalImg}/>
                                <p>{modal.titulo}</p>
                            </div>
                        </div>,
                        document.body
                    )}

            </div>
            <div className="mt-8">
                <Line></Line>
            </div>
        </section>
    )
}

export default Galery
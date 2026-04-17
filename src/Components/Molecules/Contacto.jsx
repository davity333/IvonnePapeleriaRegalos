import styleFont from "../Styles/fonts.module.css"
import tachuela from "../../../public/tachuela.png"
import oficina from "../../../public/oficina.png"
import impresoras from "../../../public/impresoras.png"
import messageIcon from "../../../public/icons/message.png"
import whatsapp from "../../../public/icons/whatsapp.png"
import style from "../Styles/animation.module.css"
import { useState } from "react";
import ScrollReveal from "../Atoms/ScrollReveal";

const WHATSAPP_NUMBER = "529711637722";

function isDentroDeHorario() {
    const ahora = new Date();
    const dia = ahora.getDay();
    const totalMin = ahora.getHours() * 60 + ahora.getMinutes();
    if (dia === 0) return totalMin >= 8 * 60 && totalMin < 14 * 60;
    if (dia >= 1 && dia <= 6) return totalMin >= 8 * 60 && totalMin < 20 * 60 + 50;
    return false;
}

function getMensajeReapertura() {
    const ahora = new Date();
    const dia = ahora.getDay();
    const totalMin = ahora.getHours() * 60 + ahora.getMinutes();
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    if (totalMin < 8 * 60) return "El contacto se habilitará hoy a las 8:00 AM";
    if (dia === 6) return "El contacto se habilitará el domingo a las 8:00 AM";
    if (dia === 0) return "El contacto se habilitará el lunes a las 8:00 AM";
    return `El contacto se habilitará mañana (${dias[(dia + 1) % 7]}) a las 8:00 AM`;
}

function Contacto() {
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [errors, setErrors] = useState({ nombre: false, mensaje: false });
    const [showTooltip, setShowTooltip] = useState(false);

    const disponible = isDentroDeHorario();
    const mensajeReapertura = getMensajeReapertura();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {
            nombre: nombre.trim() === "",
            mensaje: mensaje.trim() === "",
        };
        setErrors(newErrors);
        if (newErrors.nombre || newErrors.mensaje) return;

        const textoWsp =
            `_Ivonne Papelería y Regalo s - Formulario_\n\n` +
            `*Asunto:* ${nombre.trim()}\n\n` +
            `*Descripción:* ${mensaje.trim()}\n\n`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textoWsp)}`;
        window.open(url, "_blank");
    };

    return (
        <ScrollReveal>
            <section className="px-4 sm:px-6 md:px-1 py-10" id="contacto">

                {/* Encabezado */}
                <div className="flex gap-3 items-center">
                    <p id={styleFont.passionOne} className="text-3xl md:text-5xl text-[#B3B6C0]">
                        CONTACTANOS
                    </p>
                    <img src={messageIcon} alt="message" className="size-12 md:size-20 animate-bounce" />
                </div>

                {/* Layout principal */}
                <div className="flex flex-col md:flex-row items-stretch gap-8 mt-4 w-full">

                    {/* Mitad izquierda — texto + imágenes */}
                    <div className="flex-1 flex flex-col">
                        <p id={styleFont.jockey} className="text-[4vh] text-[#8A8C93]">
                            ¿Algo en especial?
                        </p>
                        <p className="opacity-60 text-[2.4vh] max-w-[50ch] leading-7 mt-3">
                            Escuela, oficina, regalos o trabajos de computadora. Cuéntanos qué buscas y te responderemos por WhatsApp.
                        </p>
                        <div className={style.containerImagenes}>
                            <img src={oficina} className={`${style.oficina} object-cover`} />
                            <img src={impresoras} className={`${style.impresora} object-cover`} />
                        </div>
                    </div>

                    {/* Mitad derecha — formulario */}
                    <div className="flex-1 flex justify-center">
                        <div className="bg-white drop-shadow-2xl p-5 sm:p-8 w-full relative mt-8">

                            {/* Tachuela decorativa */}
                            <div className="flex justify-center">
                                <img src={tachuela} alt="tachuela" className="w-16 sm:w-20 absolute -top-8" />
                            </div>

                            <form
                                className="flex flex-col gap-5 w-full pt-4"
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <p id={styleFont.jockey} className="text-2xl sm:text-3xl text-[#F66055] text-center">
                                    Formulario
                                </p>

                                {/* Asunto */}
                                <div className="flex flex-col gap-1">
                                    <label className="font-medium text-sm text-gray-700">Asunto</label>
                                    <input
                                        type="text"
                                        value={nombre}
                                        onChange={(e) => {
                                            setNombre(e.target.value);
                                            if (e.target.value.trim() !== "")
                                                setErrors(prev => ({ ...prev, nombre: false }));
                                        }}
                                        placeholder="Ej. Impresiones a color"
                                        className={`w-full rounded-lg px-3 py-3 sm:py-3 text-sm focus:outline-none focus:ring-2 transition border ${
                                            errors.nombre
                                                ? "border-red-500 border-[3px] ring-red-300"
                                                : "border-[#f0686862] focus:ring-[#f06868]"
                                        }`}
                                    />
                                    {errors.nombre && (
                                        <p className="text-red-500 text-xs mt-0.5">Este campo es obligatorio</p>
                                    )}
                                </div>

                                {/* Descripción */}
                                <div className="flex flex-col gap-1">
                                    <label className="font-medium text-sm text-gray-700">Descripción</label>
                                    <textarea
                                        value={mensaje}
                                        onChange={(e) => {
                                            setMensaje(e.target.value);
                                            if (e.target.value.trim() !== "")
                                                setErrors(prev => ({ ...prev, mensaje: false }));
                                        }}
                                        placeholder="¿Cuántas copias necesitas? ¿En qué tamaño?"
                                        className={`w-full rounded-lg px-3 py-2 text-sm resize-none h-32 sm:h-32 focus:outline-none focus:ring-2 transition border ${
                                            errors.mensaje
                                                ? "border-red-500 border-[3px] ring-red-300"
                                                : "border-[#f0686862] focus:ring-[#f06868]"
                                        }`}
                                    />
                                    {errors.mensaje && (
                                        <p className="text-red-500 text-xs mt-0.5">Este campo es obligatorio</p>
                                    )}
                                </div>

                                {/* Botón con tooltip */}
                                <div
                                    className="relative flex justify-center"
                                    onMouseEnter={() => !disponible && setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                >
                                    {showTooltip && !disponible && (
                                        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 w-64 pointer-events-none">
                                            <div className="bg-gray-900 text-white text-xs rounded-xl px-3 py-2.5 shadow-2xl text-center leading-snug">
                                                🔒 {mensajeReapertura}
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="w-3 h-3 bg-gray-900 rotate-45 -mt-1.5" />
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        type={disponible ? "submit" : "button"}
                                        disabled={!disponible}
                                        onClick={() => !disponible && setShowTooltip(prev => !prev)}
                                        className={`w-full sm:w-auto rounded-full py-2.5 px-6 text-sm font-medium transition duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
                                            disponible
                                                ? "bg-[#3CD94E] text-white hover:bg-[#4be65d] active:scale-95 cursor-pointer"
                                                : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-70"
                                        }`}
                                    >
                                        {disponible ? "Enviar por WhatsApp" : "No disponible ahora"}
                                        <img
                                            src={whatsapp}
                                            alt="whatsapp"
                                            className={`w-4 h-4 ${!disponible && "opacity-40"}`}
                                        />
                                    </button>
                                </div>

                                <p className="text-xs text-gray-400 text-center leading-snug">
                                    Al enviar, se abrirá WhatsApp con tu mensaje listo para enviar a Ivonne Papelería y Regalos.
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </ScrollReveal>
    );
}

export default Contacto;
import { useState } from "react"
import logo from "../../../public/logo.png"
import fontStyle from "../Styles/fonts.module.css"
import menu from "../../../public/icons/menu.png"
import styleResponsive from "../Styles/responsive.module.css"
import styleAnimation from "../Styles/animation.module.css"

function Header(){

    const [open, setOpen] = useState(false)

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) {
            const headerHeight = document.querySelector("header")?.offsetHeight || 70
            const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16
            window.scrollTo({ top, behavior: "smooth" })
        }
        setOpen(false)
    }

    return(
        <>
            {open && (
                <div 
                    className="fixed inset-0 z-[998] bg-black/20 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

        <div className={`${styleResponsive.menuContainer} ${open ? styleResponsive.menuOpen : ""}`}>
            
            <button 
                className={styleResponsive.closeBtn}
                onClick={() => setOpen(false)}
            >
                ✕
            </button>

            <span className={styleResponsive.menuItem} onClick={() => scrollTo("presentacion")}>Presentación</span>
            <span className={styleResponsive.menuItem} onClick={() => scrollTo("eligenos")}>Eligenos</span>
            <span className={styleResponsive.menuItem} onClick={() => scrollTo("ofrecemos")}>Ofrecemos</span>
            <span className={styleResponsive.menuItem} onClick={() => scrollTo("galeria")}>Galeria</span>
            <span className={styleResponsive.menuItem} onClick={() => scrollTo("ubicacion")}>Ubicación</span>
            <span className={styleResponsive.menuItem} onClick={() => scrollTo("contacto")}>Contacto</span>
        </div>

            <header 
    id={styleAnimation.header}
    className="bg-white drop-shadow-xl p-2 px-4 sm:px-6 md:px-10 flex items-center justify-center gap-6 sm:gap-10 md:gap-20 sticky top-0 z-50">

    <img 
        src={menu} 
        alt="menu" 
        className="w-8 md:hidden absolute left-4 cursor-pointer"
        onClick={() => setOpen(!open)}
    />

    <nav className="hidden md:flex gap-6 lg:gap-10">
        <span id={fontStyle.inder} className="hover:text-[#B3AC89] transition-colors duration-200 cursor-pointer text-[#0000009e]" onClick={() => scrollTo("presentacion")}>Presentación</span>
        <span id={fontStyle.inder} className="hover:text-[#B3AC89] transition-colors duration-200 cursor-pointer text-[#0000009e]" onClick={() => scrollTo("eligenos")}>Eligenos</span>
        <span id={fontStyle.inder} className="hover:text-[#B3AC89] transition-colors duration-200 cursor-pointer text-[#0000009e]" onClick={() => scrollTo("ofrecemos")}>Ofrecemos</span>
    </nav>

    <div className="grid justify-center text-center">
        <img src={logo} alt="logo" className="w-12 md:w-14 justify-self-center"/>
        <p id={fontStyle.jockey} className="text-[#B3AC89] text-sm">IVONNE PAPELERIA Y REGALOS</p>
    </div>

    <nav className="hidden md:flex gap-6 lg:gap-10">
        <span id={fontStyle.inder} className="hover:text-[#B3AC89] transition-colors duration-200 cursor-pointer text-[#0000009e]" onClick={() => scrollTo("galeria")}>Galeria</span>
        <span id={fontStyle.inder} className="hover:text-[#B3AC89] transition-colors duration-200 cursor-pointer text-[#0000009e]" onClick={() => scrollTo("ubicacion")}>Ubicación</span>
        <span id={fontStyle.inder} className="hover:text-[#B3AC89] transition-colors duration-200 cursor-pointer text-[#0000009e]" onClick={() => scrollTo("contacto")}>Contacto</span>
    </nav>

</header>

        </>
    )
}
export default Header;
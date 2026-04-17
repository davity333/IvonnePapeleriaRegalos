import { motion } from "framer-motion";

const variants = {
    "fade-up": { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 } },
    "fade-left": { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 } },
    "fade-right": { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 } },
    "scale-up": { initial: { opacity: 0, scale: 0.85 }, whileInView: { opacity: 1, scale: 1 } },
    "blur-in": { initial: { opacity: 0, filter: "blur(10px)", y: 20 }, whileInView: { opacity: 1, filter: "blur(0px)", y: 0 } }
};

function ScrollReveal({ children, className = "", animation = "fade-up", delay = 0 }) {
    const selectedVariant = variants[animation] || variants["fade-up"];

    return (
        <motion.div
            initial={selectedVariant.initial}
            whileInView={selectedVariant.whileInView}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default ScrollReveal;

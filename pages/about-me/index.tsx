import { motion } from "framer-motion";
import Meta from "../../components/meta";



const AboutMe = () => { 
    return (
        <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .1, duration: 1, type: 'tween'}}>
        <Meta />
        <div className="container px-5 py-8 max-auto">
            <div className="flex justify-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 text-center md:text-left">
            Coming Soon!
            </h1>
            </div>

        </div>
        </motion.div>
    )
}

export default AboutMe;
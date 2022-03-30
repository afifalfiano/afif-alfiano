import { motion } from "framer-motion";


const Talks = () => {
    return (
        <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .1, duration: 1, type: 'tween'}}>
        Taks
        </motion.div>
    )
}

export default Talks;
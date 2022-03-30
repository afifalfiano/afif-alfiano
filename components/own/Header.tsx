
import { motion } from 'framer-motion';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div className='w-full bg-gradient-to-r from-pink-500 to-purple-500 pt-10'>
            {/* <NavBar /> */}
        <div className="container mx-auto grid grid-cols-2  pt-6 pb-16 gap-x-10">
            <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: .3, duration: .7}} className="flex flex-col justify-center items-start flex-auto ">
                <h2  className='text-5xl text-white  pb-8 font-semibold'>Frontend Developer</h2>
                <h1 className='text-8xl text-white pb-8 font-bold'>Afif Alfiano</h1>
                <p className='text-2xl text-white pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore dolorum explicabo cupiditate molestiae et quis assumenda, minima hic consequuntur.</p>
                <button className='rounded-lg text-white font-bold py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-200'>Concact Me</button>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: .3, duration: .7}} className='flex flex-auto '>
                <img src="../assets/new-afif.png" alt="Afif" className="img w-full" />
            </motion.div>
            </div>
        </div>
    )
}

export default Header;
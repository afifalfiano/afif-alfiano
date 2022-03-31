
import { motion } from 'framer-motion';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div className='w-full bg-gradient-to-r from-pink-500 to-purple-500 lg:pt-10'>
        <div className="container mx-auto lg:grid lg:grid-cols-2  pb-10 lg:pt-6 lg:pb-16 lg:gap-x-10 flex lg:items-start lg:justify-start  justify-center items-center px-8 py-8">
            <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: .3, duration: .7}} className="flex flex-col justify-center items-start flex-auto ">
                <div className='w-full items-center justify-items-center pb-6 lg:hidden'>
                <img src="../assets/blog/authors/afif.jpg" alt="Afif" className="mx-auto img border-4  rounded-full text-center" width="50" loading="lazy" style={{'width': '50%'}} />
                </div>
                <h2  className='lg:text-5xl text-white  lg:pb-8 font-semibold text-4xl pb-4 text-center w-full'>Frontend Developer</h2>
                <h1 className='lg:text-8xl text-6xl text-white lg:pb-8 pb-4 font-bold text-center w-full'>Afif Alfiano</h1>
                <p className='lg:text-2xl text-xl text-white pb-10 w-full text-justify'>Actually, I don't know what I'm doing for now. But I like to do this thing. Welcome to my personal web guys. Hopefully it is usefull for you.</p>
                <button className='rounded-lg  flex self-center justify-self-center text-white font-bold py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500 transition-colors  duration-200 delay-200'>Concact Me</button>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: .3, duration: .7}} className='lg:flex lg:flex-auto lg:ml-32 hidden'>
                <img src="../assets/new-afif.png" alt="Afif" className="img w-auto" width="200" loading="lazy"/>
            </motion.div>
            </div>
        </div>
    )
}


export default Header;
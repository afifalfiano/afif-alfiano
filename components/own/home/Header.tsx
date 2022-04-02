
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <div className='w-full bg-gradient-to-r from-pink-500 to-purple-500 '>
        <div className="container mx-auto lg:flex  lg:gap-x-8 flex lg:items-center lg:justify-center  justify-center items-center py-8 px-5 lg:py-16 lg:px-10 xl:px-0">
            <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: .3, duration: .7}} className="flex flex-col justify-center items-start flex-auto lg:max-w-lg xl:max-w-2xl">
                <div className='w-full items-center justify-items-center pb-6 lg:hidden'>
                <img src="../assets/blog/authors/afif.jpg" alt="Afif" className="mx-auto img border-4  rounded-full text-center" width="50" height="50" loading="lazy" style={{'width': '50%'}} />
                </div>
                <h2  className='lg:text-5xl text-white  lg:pb-8 font-semibold text-3xl pb-4 text-center w-full lg:text-left'>Frontend Developer</h2>
                <h1 className='lg:text-8xl text-5xl text-white lg:pb-8 pb-4 font-bold text-center lg:text-left w-full'>Afif Alfiano</h1>
                <p className='lg:text-2xl text-xl text-white pb-10 w-full text-justify tracking-tight prose prose-slate'>Actually, I don't know what I'm doing for now. But I like to do this thing. Welcome to my personal web guys. Hopefully it is usefull for you.</p>
                <button className='rounded-lg  flex self-center  prose prose-slate justify-self-center lg:justify-self-start lg:self-start  text-white font-bold py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500 transition-colors  duration-200 delay-200'>Concact Me</button>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: .3, duration: .7}} className='lg:flex lg:items-center lg:flex-auto xl:flex xl:justify-end hidden xl:max-h-auto'>
                <img src="../assets/new-afif.png" alt="Afif" className="img w-auto xl:max-w-md" width="200" loading="lazy"/>
            </motion.div>
            </div>
        </div>
    )
}


export default Header;
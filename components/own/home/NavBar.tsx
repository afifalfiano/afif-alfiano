import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from './NavBar.module.css';

// const headerVariant = {
//     hidden: {
//         y: -10,
//         opacity: 0
//     },
//     visible: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             delay: 0.1,
//             duration: 0.3
//         }
//     }
// }
const NavBar = () => {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const handlerHamburgerMenu = () => {
        setIsOpen(prev => prev = !prev);
    }
    
    return (
        <header  className={` ${styles['header-nav']} `}>
            <div className="container mx-auto flex-row  flex justify-between" >
            <div className='flex  items-center justify-start'>
            <Link href="/" passHref>
                <h1 className={`${styles.title}`}>AA</h1>
            </Link>
            </div>
            <div className='items-center justify-start gap-x-10 text-xl  text-gray-300 hidden md:flex' onClick={() => setIsOpen(false)}>
            <Link href="/" passHref>
                <a className={`hover:border-b-4  hover:border-b-pink-500  hover:text-white  ${router.pathname === '/' ? styles.active: ''}`}>Home</a>
            </Link>
            <Link href="/blogs">
                <a className={`hover:border-b-4  hover:border-b-pink-500  hover:text-white  ${router.pathname === '/blogs' || router.pathname.match('/posts') ? styles.active: ''}`}>Blogs</a>
            </Link>
            <Link href="/talks">
                <a className={`hover:border-b-4  hover:border-b-pink-500 hover:text-white  ${router.pathname === '/talks' ? styles.active: ''}`}>Talks</a>
            </Link>
            <Link href="/about-me">
                <a className={`hover:border-b-4  hover:border-b-pink-500 hover:text-white  ${router.pathname === '/about-me' ? styles.active: ''}`}>About Me</a>
            </Link>
            </div>

            <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={handlerHamburgerMenu} title="menu" aria-label="menu">
                <svg
                    className="w-6 h-6 text-white"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
            </div>
            <motion.div initial={{top: -100}} animate={{top:40}} transition={{duration: .7}} className={`${isOpen ? 'flex flex-col gap-y-2 pt-5 text-xl text-gray-300 bg-indigo-900 absolute top-10 left-0 p-5 shadow-xl md:hidden': 'hidden' } w-full`} onClick={() => setIsOpen(false)}>
            <Link href="/" passHref>
                <a className={`hover:border-b-4  hover:border-b-pink-500  hover:text-white  ${router.pathname === '/' ? styles.active: ''}`}>Home</a>
            </Link>
            <Link href="/blogs">
                <a className={`hover:border-b-4  hover:border-b-pink-500  hover:text-white  ${router.pathname === '/blogs' || router.pathname.match('/posts') ? styles.active: ''}`}>Blogs</a>
            </Link>
            <Link href="/talks">
                <a className={`hover:border-b-4  hover:border-b-pink-500 hover:text-white  ${router.pathname === '/talks' ? styles.active: ''}`}>Talks</a>
            </Link>
            <Link href="/about-me">
                <a className={`hover:border-b-4  hover:border-b-pink-500 hover:text-white  ${router.pathname === '/about-me' ? styles.active: ''}`}>About Me</a>
            </Link>
        </motion.div>

        </header>
    )
}

export default NavBar;
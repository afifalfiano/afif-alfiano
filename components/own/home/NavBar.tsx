import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css';

const headerVariant = {
    hidden: {
        y: -10,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.5
        }
    }
}
const NavBar = () => {
    const router = useRouter();

    return (
        <motion.header variants={headerVariant} initial="hidden" animate="visible"  className={` ${styles['header-nav']}`}>
            <div className='flex  items-center justify-start'>
                <h1 className={`${styles.title}`}>AA</h1>
            </div>
            <div className='flex items-center justify-start gap-x-10 text-xl  text-gray-300'>
            <Link href="/" passHref>
                <a className={`hover:border-b-4  hover:border-b-pink-500  hover:text-white  ${router.pathname === '/' ? styles.active: ''}`}>Home</a>
            </Link>
            <Link href="/blogs">
                <a className={`hover:border-b-4  hover:border-b-pink-500  hover:text-white  ${router.pathname === '/blogs' || router.pathname.match('/posts') ? styles.active: ''}`}>Blogs</a>
            </Link>
            <Link href="/talks">
                <a className={`hover:border-b-4  hover:border-b-pink-500 hover:text-white  ${router.pathname === '/talks' ? styles.active: ''}`}>Talks</a>
            </Link>
            </div>
        </motion.header>
    )
}

export default NavBar;
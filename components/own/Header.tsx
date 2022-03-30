
import Link from 'next/link'
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={`${styles['header-nav']}`}>
            <div className='flex  items-center justify-start'>
                <h1 className={`${styles.title}`}>AA</h1>
            </div>
            <div className='flex items-center justify-start gap-x-10 text-3xl '>
            <Link href="/" passHref>
                <a className="hover:underline  hover:text-white text-white">Home</a>
            </Link>
            <Link href="/blogs">
                <a className="hover:underline hover:text-white text-gray-300">Blogs</a>
            </Link>
            <Link href="/talks">
                <a className="hover:underline hover:text-white text-gray-300">Talks</a>
            </Link>
            </div>
        </header>
    )
}

export default Header;
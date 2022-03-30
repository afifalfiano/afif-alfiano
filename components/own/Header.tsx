
import Link from 'next/link'
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className='w-full bg-gradient-to-r from-pink-500 to-purple-500 pt-10'>
        <header className={`container mx-auto  ${styles['header-nav']}`}>
            <div className='flex  items-center justify-start'>
                <h1 className={`${styles.title}`}>AA</h1>
            </div>
            <div className='flex items-center justify-start gap-x-10 text-3xl '>
            <Link href="/" passHref>
                <a className="hover:border-b-4  hover:border-b-pink-500  hover:text-white text-white border-b-4 border-b-pink-500">Home</a>
            </Link>
            <Link href="/blogs">
                <a className="hover:border-b-4  hover:border-b-pink-500  hover:text-white text-gray-300">Blogs</a>
            </Link>
            <Link href="/talks">
                <a className="hover:border-b-4  hover:border-b-pink-500 hover:text-white text-gray-300">Talks</a>
            </Link>
            </div>
        </header>
        <div className="container mx-auto grid grid-cols-2  pt-10 pb-10 gap-x-20">
            <div className="flex flex-col justify-center items-start flex-auto ">
                <h2 className='text-5xl text-white  pb-8 font-semibold'>Frontend Developer</h2>
                <h1 className='text-8xl text-white pb-10 font-bold'>Afif Alfiano</h1>
                <p className='text-2xl text-white pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore dolorum explicabo cupiditate molestiae et quis assumenda, minima hic consequuntur.</p>
                <button className='rounded-md text-white font-bold py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-200'>Concact Me</button>
            </div>
            <div className='flex flex-auto ml-20'>
                <img src="../assets/afif.png" alt="Afif" className="img w-full" />
            </div>
            </div>
        </div>
    )
}

export default Header;
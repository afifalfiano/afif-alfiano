import Link from "next/link";
import styles from './Footer.module.css';


const Footer = () => {
    return (
        <div className={`w-full text-white  ${styles['bg-dark-footer']}`}>
            <div className="container mx-auto flex justify-center items-center p-3">
                    <p>© 2020 Copyright <Link href="/"><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-pink-500">Afif Alfiano</span></Link></p>
            </div>
        </div>
    )
}

export default Footer;
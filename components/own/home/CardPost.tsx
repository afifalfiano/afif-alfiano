import { motion } from "framer-motion";
import Link from "next/link";
import { wordCount } from "../../../utils/wordCount";


const CardPost = ({ post }: any) => {
    const totalRead = wordCount(post.wordCount) || 0;
    const timePublish = new Date(post.date).toLocaleDateString('id-ID');

    return (
        <Link href={'/posts/' + post.slug}>
        <motion.div  whileHover={{scale: 1.1, cursor: 'pointer'}} transition={{duration: .5}} key={post.slug} className="flex flex-col w-full bg-white rounded-lg ">
            <div className="relative">
            <div className="h-max-64 w-auto"><img src={post.coverImage} alt={post.title} className="rounded-tl-lg rounded-tr-lg w-full h-full" width="200" loading="lazy" /></div>
            <p className="absolute top-0 lef-0 bg-blue-500 py-2 px-3 text-white  rounded-tl-lg lg:hidden md:hidden">
                    {totalRead} minute read
            </p>
            </div>
            <div className="p-5 flex flex-col">
                <p className="h-max-20 font-semibold text-lg pt-5">{post.title}</p>
                <p className="h-max-20 text-gray-500 pt-3">Post on <span className="text-blue-500">{timePublish}</span> by <span className="text-blue-500">{post.author.name}</span></p>
                <p className="text-justify md:text-left tracking-tight h-max-40 pt-1">{post.excerpt}</p>
                <div className="md:flex md:justify-between md:items-center pt-5">
                <button className="items-end rounded-lg text-white font-bold py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500">
                    Read more
                    </button>
                    <p className="text-blue-500 font-semibold hidden md:block lg:block">
                    {totalRead} minutes to read
                    </p>
                </div>
            </div>
        </motion.div>
        </Link>
    )
}

export default CardPost;
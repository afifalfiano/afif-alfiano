import { motion } from "framer-motion";
import Link from "next/link";
import { wordCount } from "../../../utils/wordCount";


const CardPost = ({ post }: any) => {
    const totalRead = wordCount(post.wordCount) || 0;
    const timePublish = new Date(post.date).toLocaleDateString('id-ID');

    return (
        <Link href={'/posts/' + post.slug}>
        <motion.div  whileHover={{scale: 1.1, cursor: 'pointer'}} transition={{duration: .5}} key={post.slug} className="flex flex-col w-full bg-white rounded-lg ">
            <div className="h-52 w-auto"><img src={post.coverImage} alt={post.title} className="rounded-tl-lg rounded-tr-lg w-full h-full" /></div>
            <div className="p-5 flex flex-col">
                <p className="h-16 font-semibold text-lg">{post.title}</p>
                <p className="h-8 text-gray-500">Post on <span className="text-blue-500">{timePublish}</span> by <span className="text-blue-500">{post.author.name}</span></p>
                <p className="text-left h-36">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                <button className="items-end rounded-lg text-white font-bold py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500">
                    Read more
                    </button>
                    <p className="text-blue-500 font-semibold">
                    {totalRead} minutes to read
                    </p>
                </div>
            </div>
        </motion.div>
        </Link>
    )
}

export default CardPost;
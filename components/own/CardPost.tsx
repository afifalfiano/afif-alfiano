

const CardPost = ({ post }: any) => {

    const timePublish = new Date(post.date).toLocaleDateString('id-ID');

    return (
        <div key={post.slug} className="flex flex-col  w-full bg-white rounded-lg ">
            <div className="h-52 w-auto"><img src={post.coverImage} alt={post.title} className="rounded-tl-lg rounded-tr-lg w-full h-full" /></div>
            <div className="p-5 flex flex-col">
                <p className="h-16 font-semibold text-lg">{post.title}</p>
                <p className="h-8 text-gray-500">Post on <span className="text-blue-600">{timePublish}</span> by <span className="text-blue-600">{post.author.name}</span></p>
                <p className="h-28 text-left">{post.excerpt.slice(0, 120) + '...'}</p>
                <button className="items-end mt-5 rounded-lg text-white font-bold py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500 ">Read more</button>
            </div>
        </div>
    )
}

export default CardPost;
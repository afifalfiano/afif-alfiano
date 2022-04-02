import Post from '../../../types/post'
import CardPost from './CardPost';
import Link from 'next/link';

type Props = {
    allPosts: Post[]
  }

const FeaturedPost  = ({allPosts}: Props) => {

    const newFeaturedPost = allPosts.slice(0,3);
    const featuredPost = newFeaturedPost.map((post: Post) => {
        return (
            <div className='my-8' key={post.slug}>
                <CardPost  post={post}/>
            </div>
        )
    })

    return  (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-full'>
        <div className="container mx-auto  lg:py-16 py-8 px-5 lg:px-10">
        <h1 className='lg:text-8xl pb-4 text-5xl lg:pb-8 font-bold text-white text-left lg:text-center'>Featured Post</h1>
        <p className='lg:text-2xl text-xl  text-white lg:text-center text-justify tracking-tight '>This is my blog or tutorial about technology that you can learn from this and enjoy my posts.</p>

        <div className='lg:flex lg:flex-row lg:gap-10 justify-center item-center'>
            {featuredPost}
        </div>

        <div className='flex justify-center items-center mt-10'>
            <Link href='/blogs'>
                <button className='rounded-lg text-white font-bold py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500 prose prose-slate'>All Posts</button>
            </Link>
        </div>

        </div>
        </div>
    );
}

export default FeaturedPost;
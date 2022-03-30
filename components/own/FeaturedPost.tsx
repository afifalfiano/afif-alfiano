import Post from '../../types/post'
import CardPost from '../../components/own/CardPost';
import Link from 'next/link';

type Props = {
    allPosts: Post[]
  }

const FeaturedPost  = ({allPosts}: Props) => {

    const newFeaturedPost = allPosts.slice(0,3);
    console.log(newFeaturedPost, 'cek');
    const featuredPost = newFeaturedPost.map((post: Post) => {
        return (
            <CardPost key={post.slug} post={post}/>
        )
    })

    return  (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-full'>
        <div className="container mx-auto  py-36">
        <h1 className='text-8xl  pb-8 font-bold text-white text-center'>Featured Post</h1>
        <p className='text-2xl  pb-10 text-white text-center'>This is my blog or tutorial that make other people can read and implements some tutorial.</p>

        <div className='flex gap-10 justify-center item-center'>
            {featuredPost}
        </div>

        <div className='flex justify-center items-center mt-10'>
            <Link href='/blogs'>
                <button className='rounded-lg text-white font-bold py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-pink-500 hover:to-yellow-500'>All Posts</button>
            </Link>
        </div>

        </div>
        </div>
    );
}

export default FeaturedPost;
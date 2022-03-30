import Post from '../../types/post'
import CardPost from '../../components/own/CardPost';

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

        <div className='flex gap-8 justify-center item-center'>
            {featuredPost}
        </div>

        </div>
        </div>
    );
}

export default FeaturedPost;
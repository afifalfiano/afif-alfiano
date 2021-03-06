import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <PostTitle>{title}</PostTitle>
      <div className='block mb-6'>
      <DateFormatter dateString={date} />
      </div>
      <div className="mb-10">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-4">
        <CoverImage title={title} src={coverImage} id="hero"/>
      </div>
    </div>
  )
}

export default PostHeader

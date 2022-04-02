import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  id?: string
}

const CoverImage = ({ title, src, slug, id }: Props) => {
  const image = (
    <img
      loading="lazy"
      src={src}
      alt={`Cover Image for ${title}`}
      className={`shadow-sm ${id === 'hero' ? 'h-full' : 'lg:h-80 md:h-52 h-62'}  w-full hover:shadow-lg transition-shadow duration-200`}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage

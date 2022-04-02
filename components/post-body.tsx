import markdownStyles from './markdown-styles.module.css'
import Comments from './own/home/Comments';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  const a = 'a';
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={`${markdownStyles['markdown']} prose prose-slate`}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>

    <Comments/>
    </div>
  )
}

export default PostBody

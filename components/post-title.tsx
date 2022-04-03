import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4 md:mb-8 text-center">
      {children}
    </h1>
  )
}

export default PostTitle

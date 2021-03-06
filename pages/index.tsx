
import { getAllPosts } from '../lib/api'
import Post from '../types/post'
import About from '../components/own/home/About'
import FeaturedPost from '../components/own/home/FeaturedPost'
import Footer from '../components/own/home/Footer'
import { motion } from 'framer-motion'
import Header from '../components/own/home/Header';
type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <div>
    <Header />
    <About />
    <FeaturedPost allPosts={allPosts} />
    <Footer/>
    </div>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'wordCount',
  ])

  return {
    props: { allPosts },
  }
}

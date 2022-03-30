import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import About from '../components/own/About'
import FeaturedPost from '../components/own/FeaturedPost'
import Footer from '../components/own/Footer'
import { motion } from 'framer-motion'
import Header from '../components/own/Header';
type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .1, duration: 1, type: 'tween'}}>
    <Header />
    <About />
    <FeaturedPost allPosts={allPosts} />
    <Footer/>
    </motion.div>
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
    'wordCount'
  ])

  return {
    props: { allPosts },
  }
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services'
import FeaturedPosts from '../section/FeaturedPosts'

const Home = ({ posts }: { posts: any }) => {
  //console.log(posts)
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="flex px-4 md:gap-[30px] md:px-10 2xl:px-[200px]">
        <div className="mt-2 w-full lg:w-[60%] 2xl:w-[50%]">
          <div className=" flex items-center gap-[10px]">
            <h1 className="text-2xl font-bold italic text-[#222629]">Latest</h1>
            <div className="h-[5px] w-[30%] skew-x-[-35deg] border-2 border-[#547D21] bg-[#547D21]"></div>
          </div>
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="md:w-[50%]">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return { props: { posts } }
}

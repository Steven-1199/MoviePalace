import React, { useState, useEffect } from 'react'
import { FeaturedPost } from '../components'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { getFeaturedPosts } from '../services'

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([])
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  }

  useEffect(() => {
    getFeaturedPosts().then((results) => setPosts(results))
  }, [])
  //console.log(posts)

  return (
    <div className="relative z-0 bg-[#222629] px-4 md:px-10 2xl:px-[200px]">
      <div className="w flex w-full justify-center text-center">
        <h1 className="text-xl font-bold italic ">Feature Posts</h1>
      </div>
      <Carousel responsive={responsive} infinite={true} autoPlaySpeed={8000}>
        {posts.map((post) => (
          <FeaturedPost post={post} key={post.slug} />
        ))}
      </Carousel>
    </div>
  )
}

export default FeaturedPosts
export async function getStaticProps() {
  const posts = await getFeaturedPosts()
  return { props: { posts } }
}

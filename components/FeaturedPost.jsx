import React from 'react'
import Link from 'next/link'

const FeaturedPost = ({ post }) => {
  //console.log(post)
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="relative mt-4 mb-2 flex h-[200px] w-[300px] overflow-hidden py-6 hover:opacity-[0.8] md:w-[230px] md:w-[280px] 2xl:w-[320px]">
        <div className="absolute top-0 z-0 opacity-[0.5]">
          <img
            src={post.featuredImage.url}
            className="h-[180px] w-[300px] object-cover object-top md:w-[280px] 2xl:w-[320px]"
          />
        </div>
        <div className="relative z-20 px-3">
          <span className="mb-0 text-xs font-bold text-[#547D21]">
            {post.categories[0].name}
          </span>
          <h1 className="mb-2 cursor-pointer text-lg font-bold text-white ">
            {post.title}
          </h1>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedPost

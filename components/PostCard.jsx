import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  //console.log(post)
  return (
    <div className="border-b border-gray-300 pb-4">
      <span className="mb-0 text-xs font-bold text-[#547D21]">
        {post.categories[0].name}
      </span>
      <div className="postCard-hover">
        <Link href={`/post/${post.slug}`} className="">
          <h1 className="mb-2 cursor-pointer text-2xl font-bold">
            {post.title}
          </h1>
        </Link>
        <Link href={`/post/${post.slug}`}>
          <div className="relative w-full overflow-hidden lg:w-auto">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="w-full cursor-pointer object-cover object-top transition-transform duration-[3s] md:h-80 2xl:h-[400px]"
            />
          </div>
        </Link>
      </div>
      <p className="my-2 text-neutral-800">{post.excerpt}</p>
      <div className="mt-2 flex gap-[10px] ">
        <span className="text-xs font-bold text-neutral-500">
          BY {post.author.name}
        </span>
        <span className="text-xs font-medium text-neutral-400">
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </span>
      </div>
    </div>
  )
}

export default PostCard

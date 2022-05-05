import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getEditorChoicesPosts, getSimilarPosts } from '../services'

const PostWidget = ({ slug, categories }) => {
  const [editorChoicePosts, seteditorChoicePosts] = useState([])
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((results) => {
        seteditorChoicePosts(results)
      })
    } else {
      getEditorChoicesPosts().then((results) => {
        seteditorChoicePosts(results)
      })
    }
  }, [slug])
  //console.log(editorChoicePosts)
  if (editorChoicePosts.length === 0) {
    return <div></div>
  }
  return (
    <div
      className={`relative w-full border-b border-gray-300 ${
        slug ? 'mt-6' : 'mt-2 hidden md:block'
      }`}
    >
      <div
        className={`ml-3 w-fit skew-x-[-25deg] border-r-[7px] border-[#547D21] bg-[#222629]`}
      >
        <h1 className="px-8 py-3 font-bold text-white">
          {slug ? 'Related' : 'Editor Choice'}
        </h1>
      </div>

      {editorChoicePosts.map((post, index) => (
        <div
          className={`postWidget my-4 flex w-full ${
            slug ? 'mb-6 flex-row md:flex-col' : 'flex-row'
          } gap-[8px]`}
          key={index}
        >
          <Link href={`/post/${post.slug}`}>
            <div
              className={`overflow-hidden ${
                slug ? 'h-[100px] w-[210px] md:h-auto md:w-auto' : 'w-[45%]'
              }`}
            >
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className={`${
                  slug
                    ? 'h-full w-[200px] md:h-[150px] md:w-full md:2xl:h-[170px]'
                    : 'h-[100px]'
                } cursor-pointer object-cover object-top 2xl:h-[150px]`}
              />
            </div>
          </Link>
          <div
            className={`flex flex-col justify-around ${slug ? '' : 'w-full'}`}
          >
            <span
              className={`pointer-events-none mb-0 text-[12px] font-bold text-[#547D21] ${
                slug ? 'hidden' : ''
              }`}
            >
              {post.categories[0].name}
            </span>
            <Link href={`/post/${post.slug}`} className="">
              <h2 className="mb-2 cursor-pointer text-base font-bold">
                {post.title}
              </h2>
            </Link>
            <div className="flex gap-[10px]">
              <span className="text-[10px] font-bold text-neutral-500">
                BY {post.author.name}
              </span>
              <span className="text-[10px] font-medium text-neutral-400">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget

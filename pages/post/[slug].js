import React from 'react'
import { getPosts, getPostDetails } from '../../services'
import { useRouter } from 'next/router'
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from '../../components'

const PostDetails = ({ post }) => {
  const router = useRouter()
  // console.log(post)
  if (router.isFallback) {
    return <></>
  }
  return (
    <div className="flex flex-col justify-between gap-[30px] px-10 md:flex-row xl:px-[150px] 2xl:justify-center ">
      <div className="mt-6 w-full 2xl:w-[50%]">
        <PostDetail post={post} />
        <Author author={post.author} />
      </div>
      <div className="w-full md:w-[40%] 2xl:w-[22%]">
        <PostWidget
          slug={post.slug}
          categories={post.categories.map((category) => category.slug)}
        />
        <Categories />
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)
  return { props: { post: data } }
}
export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}

import React from 'react'
import { PostCard, PostWidget, Categories } from '../../components'
import FeaturedPosts from '../../section/FeaturedPosts'
import { getCategoriesPosts, getCategories } from '../../services'

const CategoryPosts = ({ posts }) => {
  // console.log(posts)
  return (
    <div>
      <FeaturedPosts />
      <div className="flex px-4 md:gap-[30px] md:px-10 2xl:px-[200px]">
        <div className="mt-2 w-full lg:w-[60%] 2xl:w-[50%]">
          <div className=" flex items-center gap-[10px]">
            <h1 className="text-2xl font-bold italic text-[#222629]">
              {posts[0].categories[0].name}
            </h1>
            <div className="h-[5px] w-[30%] skew-x-[-35deg] border-2 border-[#547D21] bg-[#547D21]"></div>
          </div>
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
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

export default CategoryPosts

export const getStaticProps = async ({ params }) => {
  const data = await getCategoriesPosts(params.slug)
  return { props: { posts: data } }
}
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}

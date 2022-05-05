import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="mt-2 hidden w-full md:block">
      <div className="mb-2 w-fit">
        <h1 className="text-2xl font-bold italic text-[#222629]">Category</h1>
        <div className="my-1 h-[5px] w-[50%] skew-x-[-35deg] bg-[#547D21]"></div>
      </div>
      {categories.map((category) => (
        <Link href={`/categories/${category.slug}`} key={category.slug}>
          <div className="mb-1 flex cursor-pointer items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <p className="font-bold text-[#222629]">{category.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories

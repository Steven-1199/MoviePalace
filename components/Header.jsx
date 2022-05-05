import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="">
      <div className="flex w-full justify-between bg-black py-2 px-4 md:px-10 2xl:px-[200px]">
        <div className="">
          <Link href="/">
            <span className="cursor-pointer text-3xl font-bold text-white">
              MOVIE<span className="text-[#547D21]">PALACE</span>
            </span>
          </Link>
        </div>
        <div className="hidden gap-[25px] md:flex">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <span className="mt-2 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex="0" className=" bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu rounded-box flex w-44 flex-col items-end bg-base-100 p-2  shadow"
          >
            {categories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <li>
                  <span className="block px-4 py-2 text-[#222629] hover:bg-gray-100 dark:hover:bg-gray-600">
                    {category.name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

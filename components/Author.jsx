import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="border-y border-gray-300 py-3">
      <h1 className="text-lg font-bold italic">About The Author</h1>
      <div className="mt-2 flex items-start gap-[20px]">
        <div className="rounded-full ">
          <Image
            height="120px"
            width="120px"
            alt={author.name}
            src={author.photo.url}
            unoptimized
            className="object-cover object-center"
          />
        </div>
        <div className="">
          <p className="font-bold ">{author.name}</p>
          <p className="my-1 text-sm font-medium">{author.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Author

import React from 'react'
import moment from 'moment'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8 font-medium">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="mb-4 object-cover object-top md:w-full lg:h-[400px] lg:w-auto"
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <div className="w-full">
      <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
      <p className="my-2 font-medium text-neutral-800">{post.excerpt}</p>
      <div className="my-2 flex gap-[10px] ">
        <span className="text-sm font-bold text-neutral-600">
          BY {post.author.name}
        </span>
        <span className="text-sm font-medium text-neutral-500">
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </span>
      </div>
      <div className="relative mb-6 w-full overflow-hidden lg:w-auto">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-cover object-top md:w-full lg:h-[400px] lg:w-auto"
        />
      </div>
      <div>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail

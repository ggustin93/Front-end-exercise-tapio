import React, { useState } from 'react'
import PostList from './PostList'
import { Link } from 'react-router-dom'

const Posts = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredPosts = props.posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16">
          <h2 className="text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-3 mb-5">
            Our Blog
          </h2>
          <p className="font-light text-gray-600 sm:text-xl dark:text-gray-400">
            This coding project is an assignment I completed with pleasure and
            enthusiasm as part of my application for a front-end developer
            position at Tapio. I hope that you will enjoy this blog 🍃
          </p>

          <div className="inline-flex pb-3 md:py-1">
            <Link to={`/create`}>
              <button
                aria-label="Create a post"
                className="mt-10 mr-2 inline-flex items-center font-medium bg-white border-2 border-primary-400 hover:bg-primary-400 hover:text-white text-gray-800 font-bold py-2 px-4 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="uppercase text-sm"> Create </span>
              </button>
            </Link>
            <Link to={`/`}>
              <button
                aria-label="Generate a post"
                className="mt-10 ml-2 inline-flex items-center font-medium bg-white border-2 border-tertiary-400 hover:bg-tertiary-400 hover:text-white text-gray-800 font-bold py-2 px-4 rounded-md"
                onClick={props.generateAPost}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2 text-primary"
                >
                  <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
                </svg>
                <span className="uppercase text-sm"> Generate </span>
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center pb-3 px-6 md:py-1">
            <input
              type="text"
              placeholder="Search title..."
              className="border rounded-lg px-6 py-2 my-4 mr-4"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <PostList posts={filteredPosts} deletePost={props.deletePost} />
      </div>
    </section>
  )
}

export default Posts

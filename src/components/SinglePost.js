import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SinglePost extends Component {
  showPost = (props) => {
    if (!props.post) return null

    const {
      title,
      avatar,
      image,
      userId,
      body,
      category,
      datestamp,
    } = this.props.post

    return (
      <React.Fragment>
        <div class="">
          <div class="rounded-lg p-20 w-full max-w-xl content-center mx-auto border-2">
            <Link to={`/`}>
              <button class="mt-10 mb-10 inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span> All Posts</span>
              </button>
            </Link>
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                <svg
                  class="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                {category ? category : 'Category'}
              </span>
            </div>

            <h2 className="capitalize text-3xl font-medium text-gray-800 mb-8">
              {title}
            </h2>

            <div className="my-4 mb-5">
              <img class="mb-8 rounded-md" src={image} alt="blog_image" />

              <p className="normal-case text-gray-800 mb-8"> {body}</p>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <img class="w-7 h-7 rounded-full" src={avatar} alt="avatar" />
                <span class="font-medium dark:text-white">
                  JSON Doe {userId}
                </span>
              </div>
              <span class="text-sm text-gray-500"> {datestamp} </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  render() {
    return <div className=" col-md-10">{this.showPost(this.props)}</div>
  }
}

export default SinglePost

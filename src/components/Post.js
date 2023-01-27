import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../App.css'

class Post extends Component {
  confirmDeletion = () => {
    const { id } = this.props.info

    Swal.fire({
      title: 'Delete this blog post ? ⛔️',
      text: 'Note that this action is irreversible.',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'gray-500',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        this.props.deletePost(id)
        Swal.fire(
          'Press OK to back',
          'The post has been successfully deleted.',
          'success',
        )
      }
    })
  }

  render() {
    const {
      id,
      userId,
      title,
      body,
      category,
      datestamp,
      avatar,
      image,
    } = this.props.info

    return (
      <article className="md:p-10 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end p-1">
          <Link to={`/edit/${id}`}>
            <button
              aria-label="Edit a post"
              className="px-2 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium p-1 mr-1 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          </Link>
          <Link to="/#" onClick={this.confirmDeletion}>
            <button
              aria-label="Delete a post"
              className="px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md ml-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="flex h-44 round-xl mt-6 mb-5 p-1">
          <div
            className="rounded-md"
            style={{
              flex: `1 1 0%`,
              zIndex: 'auto',
              marginTop: '-5%',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
        <div className="uppercase flex justify-between items-center mb-5 text-gray-500">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
            <svg
              className="mr-1 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">
              {' '}
              {category ? category : 'No Category'}{' '}
            </span>
          </span>
          <span className="text-sm"> {datestamp.substr(0, 10)} </span>
        </div>

        <h2 className="capitalize	mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title.length > 40 ? `${title.substr(0, 40)}...` : title}
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
          {body.length > 150 ? `${body.substr(0, 150)}...` : body}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img className="w-7 h-7 rounded-full" src={avatar} alt="avatar" />
            <span className="font-medium dark:text-white">
              JSON Doe {userId}
            </span>
          </div>
          <Link
            to={`/post/${id}`}
            href="#"
            className="inline-flex items-center font-medium text-gray-900 dark:text-primary-900 hover:underline"
          >
            Read more
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </article>
    )
  }
}
export default Post

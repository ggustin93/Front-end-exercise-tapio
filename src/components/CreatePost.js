import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { getRandomAvatar, getRandomImageUrl } from '../utils/randomData'
import { categoryOptions } from '../utils/categoryOptions'

const CreatePost = (props) => {
  // Create refs for form input fields
  const authorRef = useRef()
  const titleRef = useRef()
  const contentRef = useRef()
  const categoryRef = useRef()
  const avatarRef = useRef()
  const imageRef = useRef()

  // Get random avatar and image URL for default values
  const randomAvatar = getRandomAvatar()
  const randomImageUrl = getRandomImageUrl()

  // Function to handle form submission and create new post
  const createPost = (e) => {
    e.preventDefault()

    // Create a new post object with form input field values
    const post = {
      userId: authorRef.current.value,
      title: titleRef.current.value,
      body: contentRef.current.value,
      category: categoryRef.current.value,
      avatar: avatarRef.current.value,
      image: imageRef.current.value,
      datestamp: moment().format('DD/MM/YYYY, HH:mm'),
    }

    // Call the createPost function passed down as a prop
    props.createPost(post)

    // Show success message and redirect to homepage
    Swal.fire({
      type: 'success',
      title: 'Blog post created 🚀',
      text: 'The post has been successfully created.',
      icon: 'success',
    }).then((result) => {
      if (result.value) {
        props.history.push('/')
      }
    })
  }

  // JSX code for rendering the form
  return (
    <div className="mx-10">
      <form
        onSubmit={createPost}
        className="w-full max-w-lg mb-5 content-center mx-auto"
      >
        <Link to={`/`}>
          <button className="mt-10 inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>

            <span> Back</span>
          </button>
        </Link>
        <h2 className="pt-5 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mb-10 sm:text-base">
          Create a post
        </h2>
        <div className="w-full">
          <div className="form-group">
            <label
              className="block
                uppercase
                tracking-wide
                text-gray-700
                text-xs
                font-bold
                mb-2"
            >
              Title:
            </label>
            <input
              required
              placeholder="Give me a nice title !"
              type="text"
              ref={titleRef}
              className="peer capitalize block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
            />
          </div>

          <div className="form-group">
            <label
              className="block
                uppercase
                tracking-wide
                text-gray-700
                text-xs
                font-bold
                mb-2"
            >
              Author:
            </label>
            <input
              required
              type="text"
              ref={authorRef}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
              id="grid-first-name"
              placeholder="Your name 🤷🏻‍♂️"
            />
          </div>

          <div className="form-group">
            <label
              className="block
                uppercase
                tracking-wide
                text-gray-700
                text-xs
                font-bold
                mb-2"
            >
              URL of your Avatar
            </label>
            <input
              type="text"
              ref={avatarRef}
              className="block p-2.5 w-full text-sm text-tertiary-400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
              id="grid-first-name"
              placeholder="Image Address (URL)"
              defaultValue={randomAvatar}
            />
          </div>

          <div className="form-group">
            <label
              className="block
                uppercase
                tracking-wide
                text-gray-700
                text-xs
                font-bold
                mb-2"
            >
              URL of your Blog Post Image
            </label>
            <input
              type="text"
              ref={imageRef}
              className="block p-2.5 w-full text-sm text-tertiary-400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
              id="grid-first-name"
              placeholder="Image Address (URL)"
              defaultValue={randomImageUrl}
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="message"
              className="block
                          uppercase
                          tracking-wide
                          text-gray-700
                          text-xs
                          font-bold
                          mb-2"
            >
              Your post
            </label>
            <textarea
              required
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
              placeholder="Write your thoughts here..."
              rows="7"
              cols="25"
              ref={contentRef}
              defaultValue=""
            ></textarea>
          </div>

          <div className="form-group">
            <label
              className="block
             uppercase
             tracking-wide
             text-gray-700
             text-xs
             font-bold
             mb-2"
            >
              Category:{' '}
            </label>
            <select
              ref={categoryRef}
              defaultValue="No Category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              {categoryOptions.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mt-10">
            <button
              type="submit"
              className="inline-flex items-center font-medium bg-white border-2 border-tertiary-500 hover:bg-tertiary-500 hover:text-white text-gray-800 py-2 px-8 rounded-md"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default withRouter(CreatePost)

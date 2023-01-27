import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

class EditPost extends Component {
  // Create references htmlFor form input fields
  authorRef = React.createRef()
  titleRef = React.createRef()
  contentRef = React.createRef()
  categoryRef = React.createRef()
  avatarRef = React.createRef()
  imageRef = React.createRef()

  // Function to handle form submission and update post
  editPost = (e) => {
    e.preventDefault()
    // Create a new post object with updated information
    const post = {
      userId: this.authorRef.current.value,
      title: this.titleRef.current.value,
      body: this.contentRef.current.value,
      category: this.categoryRef.current.value,
      id: this.props.post.id,
      avatar: this.avatarRef.current.value,
      image: this.imageRef.current.value,
      datestamp: moment().format('DD/MM/YYYY, HH:mm'),
    }
    // Call the editPost function passed down as a prop
    this.props.editPost(post)

    // Show success message and redirect to homepage
    Swal.fire({
      type: 'success',
      title: 'Blog post modified 🚀',
      text: 'The post has been successfully modified.',
      icon: 'success',
    }).then((result) => {
      if (result.value) {
        this.props.history.push('/')
      }
    })
  }

  // Function to load form with current post information
  loadForm = () => {
    if (!this.props.post) return null
    const { title, userId, body, category, avatar, image } = this.props.post

    return (
      <>
        <div className="m-10">
          <form
            onSubmit={this.editPost}
            className="w-full max-w-lg m-10 content-center mx-auto"
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
            <h2 className="pt-5 mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mb-10 sm:text-base">
              Edit a post
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
                  ref={this.titleRef}
                  defaultValue={title}
                  className="capitalize block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
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
                  ref={this.authorRef}
                  className="capitalize block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
                  id="grid-first-name"
                  placeholder="Your name 🤷🏻‍♂️"
                  defaultValue={userId}
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
                  ref={this.avatarRef}
                  className="block p-2.5 w-full text-sm text-tertiary-400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
                  id="grid-first-name"
                  placeholder="Image Address (URL)"
                  defaultValue={avatar}
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
                  ref={this.imageRef}
                  className="block p-2.5 w-full text-sm text-tertiary-400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-5"
                  id="grid-first-name"
                  placeholder="Image Address (URL)"
                  defaultValue={image}
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
                  ref={this.contentRef}
                  defaultValue={body}
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
                  ref={this.categoryRef}
                  defaultValue={category}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="Renewable Energy">Renewable Energy</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Waste Management">Waste Management</option>
                  <option value="Water Conservation">Water Conservation</option>
                  <option value="Biodiversity">Biodiversity</option>
                  <option value="Sustainable Agriculture">
                    Sustainable Agriculture
                  </option>
                  <option value="Air Quality">Air Quality</option>
                  <option value="Sustainable Building">
                    Sustainable Building
                  </option>
                </select>
              </div>

              <div className="form-group mt-10">
                <button
                  type="submit"
                  className="inline-flex items-center font-medium bg-white border-2 border-tertiary-500 hover:bg-tertiary-500 hover:text-white text-gray-800 font-bold py-2 px-8 rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }

  render() {
    return <React.Fragment>{this.loadForm()}</React.Fragment>
  }
}

// To give EditPost component access to the router's history and allow back navigation
export default withRouter(EditPost)

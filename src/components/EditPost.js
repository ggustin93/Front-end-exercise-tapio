import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'

class EditPost extends Component {
  authorRef = React.createRef()
  titleRef = React.createRef()
  contentRef = React.createRef()
  categoryRef = React.createRef()

  editPost = (e) => {
    e.preventDefault()
    const post = {
      userId: this.authorRef.current.value,
      title: this.titleRef.current.value,
      body: this.contentRef.current.value,
      category: this.categoryRef.current.value,
      id: this.props.post.id,
    }
    this.props.editPost(post)

    Swal.fire({
      title: 'Post modifié 🚀',
      text: 'Le post a été modifié avec succès.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.value) {
        this.props.history.push('/')
      }
    })
  }

  loadForm = () => {
    if (!this.props.post) return null
    const { title, author, userId, body, category } = this.props.post

    return (
      <>
        <div class="m-10">
          <form
            onSubmit={this.editPost}
            class="w-full max-w-lg m-20 content-center mx-auto"
          >
            <Link to={`/`}>
              <button class="mt-10 inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
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

                <span> Back</span>
              </button>
            </Link>

            <h2 class="pt-5 mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mb-10 sm:text-base">
              Edit a post
            </h2>
            <div class="w-full">
              <div className="form-group">
                <label
                  class="block
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
                  type="text"
                  ref={this.titleRef}
                  class="capitalize block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-tertiary-500 focus:border-tertiary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary-500 dark:focus:border-tertiary-500 mb-5"
                  defaultValue={title}
                />
              </div>

              <div className="form-group">
                <label
                  class="block
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
                  type="text"
                  ref={this.authorRef}
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-5"
                  id="grid-first-name"
                  placeholder="Jane"
                  defaultValue={userId}
                />
              </div>

              <div className="form-group">
                <label
                  for="message"
                  class="block
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
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-tertiary-500 focus:border-tertiary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary-500 dark:focus:border-tertiary-500 mb-5"
                  placeholder="Write your thoughts here..."
                  rows="7"
                  cols="25"
                  ref={this.contentRef}
                  defaultValue={body}
                ></textarea>
              </div>

              <div className="form-group">
                <label
                  class="block
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-tertiary-500 focus:border-tertiary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tertiary-500 dark:focus:border-tertiary-500"
                  defaultValue={category}
                >
                  <option value="cars">Cars</option>
                  <option value="nature">Nature</option>
                  <option value="it">IT</option>
                  <option value="books">Books</option>
                  <option value="sport">Sport</option>
                </select>
              </div>

              <div class="flex items-center border-teal-500 py-2 mt-10">
                <button
                  class="bg-tertiary-400 hover:bg-tertiary-600 border-tertiary-400 hover:border-tertiary-600 text-md border-4 text-white py-2 px-10 rounded-md"
                  type="submit"
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

export default withRouter(EditPost)

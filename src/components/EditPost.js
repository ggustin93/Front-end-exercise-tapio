import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EditPost extends Component {
  authorRef = React.createRef()
  titleRef = React.createRef()
  contentRef = React.createRef()
  categoryRef = React.createRef()

  editPost = (e) => {
    e.preventDefault()
    const post = {
      author: this.authorRef.current.value,
      title: this.titleRef.current.value,
      body: this.contentRef.current.value,
      category: this.categoryRef.current.value,
      id: this.props.post.id,
    }
    this.props.editPost(post)
  }

  loadForm = () => {
    if (!this.props.post) return null
    const { title, author, body, category } = this.props.post

    return (
      <>
        <form
          onSubmit={this.editPost}
          class="w-full max-w-lg m-20 content-center"
        >
          <h2 class="pt-5 mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
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
                class="capitalize block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
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
                defaultValue={author}
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
                class="capitalize block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
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
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={category}
              >
                <option value="cars">Cars</option>
                <option value="nature">Nature</option>
                <option value="it">IT</option>
                <option value="books">Books</option>
                <option value="sport">Sport</option>
              </select>
            </div>

            <div class="flex items-center border-b border-teal-500 py-2 mt-5">
              <button
                class="bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-md border-4 text-white py-2 px-10 rounded-md"
                type="submit"
              >
                Save
              </button>

              <button class="ml-2 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-md border-4 text-white py-2 px-10 rounded-md">
                <Link to={`/`}>Cancel</Link>
              </button>
            </div>
          </div>
        </form>
      </>
    )
  }

  render() {
    return <React.Fragment>{this.loadForm()}</React.Fragment>
  }
}

export default EditPost

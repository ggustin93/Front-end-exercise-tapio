import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Post.css'
import moment from 'moment'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

class Post extends Component {
  confirmDeletion = () => {
    const { id } = this.props.info

    Swal.fire({
      title: 'Delete this one?',
      text: 'This action can not be canceled!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'No, Cancel',
    }).then((result) => {
      if (result.value) {
        this.props.deletePost(id)
        Swal.fire('Press OK to back', 'The post has been deleted', 'success')
      }
    })
  }

  render() {
    const { id, title, body, category, datestamp } = this.props.info

    return (
      <>
        <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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
            <span class="text-sm">{moment(datestamp).fromNow()}</span>
          </div>
          <div class="flex items-end mb-6">
            <Link to={`/edit/${id}`}>
              <button class="px-2 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </button>
            </Link>
            <Link onClick={this.confirmDeletion}>
              <button class="px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <h2 class="capitalize	mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title.length > 40 ? `${title.substr(0, 40)}...` : title}
          </h2>
          <p class="capitalize mb-5 font-light text-gray-500 dark:text-gray-400">
            {body.length > 300 ? `${body.substr(0, 300)}...` : body}
          </p>
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <img
                class="w-7 h-7 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <span class="font-medium dark:text-white">Jese Leos</span>
            </div>
            <Link
              to={`/post/${id}`}
              href="#"
              class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >
              Read more
              <svg
                class="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </article>
        {/* <Paper className="post">
          <p className="post_title" cols="10">
            <b>
              <span className="post-preview">
                {title.length > 25 ? `${title.substr(0, 25)}...` : title}
              </span>
            </b>
          </p>
          <Divider light />
          <p className="post_body">
            <span className="post-preview">
              {body.length > 300 ? `${body.substr(0, 300)}...` : body}
            </span>
          </p>
          <Divider light />
          <p className="post_category">
            <b>{category}</b>
          </p>
          <Divider light />
          <p className="post_datestamp">
            <b>{moment(datestamp).fromNow()}</b>
          </p>
          <div className="post_button">
            <ul className="buttons">
              <li>
                <Link to={`/post/${id}`} className="btn btn-primary">
                  {' '}
                  Show{' '}
                </Link>
              </li>
              <li>
                <Link to={`/edit/${id}`} className="btn btn-warning">
                  {' '}
                  Edit{' '}
                </Link>
              </li>
              <li>
                <Link onClick={this.confirmDeletion} className="btn btn-danger">
                  Delete
                </Link>
              </li>
            </ul>
          </div>
    </Paper>*/}
      </>
    )
  }
}
export default Post

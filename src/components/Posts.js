import React, { Component } from 'react'
import Listing from './Listing'
import { Link } from 'react-router-dom'

import axios from 'axios'

import './Post.css'
import { generateAPost } from './Router'

class Posts extends Component {
  /* generateAPost = async () => {
    try {
      console.log('Youpi it works')
      // Récupération de données aléatoires d'un post depuis l'API jsonplaceholder
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      )

      // Création d'un nouveau post dans Firestore
      const postRef = await db.collection('posts').add({
        title: data.title,
        body: data.body,
        userId: data.userId,
      })
      console.log('Post ajouté avec ID: ', postRef.id)
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  } */

  render() {
    return (
      <section class="bg-gray-100 dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-5">
            <h2 class="mt-10 mb-3 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Blog
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
            <div class="inline-flex sm:mb-3">
              <Link to={`/create`}>
                <button class="mt-10 mr-2 inline-flex items-center font-medium bg-white border-2 border-primary-500 hover:bg-primary-500 hover:text-white text-gray-800 font-bold py-2 px-4 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 mr-2 text-primary"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span> Create a post</span>
                </button>
              </Link>
              <Link to={`/`}>
                <button
                  class="mt-10 ml-2 inline-flex items-center font-medium bg-white border-2 border-tertiary-500 hover:bg-tertiary-500 hover:text-white text-gray-800 font-bold py-2 px-4 rounded-md"
                  onClick={generateAPost}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 mr-2 text-primary"
                  >
                    <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
                  </svg>
                  <span> Generate a post</span>
                </button>
              </Link>
            </div>
          </div>

          <Listing
            posts={this.props.posts}
            deletePost={this.props.deletePost}
          />
        </div>
      </section>
    )
  }
}

export default Posts

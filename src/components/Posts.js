import React, { Component } from 'react'
import Listing from './Listing'
import './Post.css'

class Posts extends Component {
  state = {}
  render() {
    return (
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mt-10 mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Blog
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
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

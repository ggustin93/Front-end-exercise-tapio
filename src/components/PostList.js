import React from 'react'
import Post from './Post'

const PostList = ({ posts, deletePost }) => {
  // function to map over the posts and render the Post component for each post
  const renderPosts = () => {
    // return null if the posts array is empty
    if (posts.length === 0) {
      return null
    }
    // map over the posts array and render the Post component for each post
    return posts.map((post) => (
      <Post key={post.id} data={post} deletePost={deletePost} />
    ))
  }

  return (
    // use CSS Grid to display the posts in a grid with two columns
    <div className="grid gap-8 lg:grid-cols-2">{renderPosts()}</div>
  )
}

export default PostList

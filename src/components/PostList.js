import React from 'react'
import Post from './Post'

const PostList = ({ posts, deletePost }) => {
  // Check if the posts array is empty and return null if it is
  if (posts.length === 0) {
    return null
  }
  return (
    // Set up a grid layout with 2 columns on large screens
    <div className="grid gap-8 lg:grid-cols-2">
      {/* For each post in the posts array, render a Post component with that post's data */}
      {posts.map((post) => (
        <Post key={post.id} data={post} deletePost={deletePost} />
      ))}
    </div>
  )
}

export default PostList

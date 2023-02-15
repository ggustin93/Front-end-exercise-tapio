import React from 'react'
import Post from './Post'

const PostList = ({ posts, deletePost }) => {
  if (posts.length === 0) {
    return null
  }
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {posts.map((post) => (
        <Post key={post.id} data={post} deletePost={deletePost} />
      ))}
    </div>
  )
}

export default PostList

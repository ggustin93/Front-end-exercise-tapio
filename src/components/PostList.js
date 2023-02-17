import React, { memo } from 'react'
import Post from './Post'

const PostList = memo(({ posts, deletePost }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {posts.length ? (
        // For each post in the posts array, render a Post component with that post's data
        posts.map((post) => (
          <Post key={post.id} data={post} deletePost={deletePost} />
        ))
      ) : (
        <p className="text-center">This blog is empty :-(</p>
      )}
    </div>
  )
})

export default PostList

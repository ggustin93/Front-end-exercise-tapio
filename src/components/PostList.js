import React from 'react'
import Post from './Post'

const PostList = ({ posts, deletePost }) => {
  // function to show all the posts
  const renderPosts = () => {
    if (posts.length === 0) {
      return null
    }
    return (
      <>
        {Object.keys(posts).map((post) => (
          <Post key={post} data={posts[post]} deletePost={deletePost} />
        ))}
      </>
    )
  }

  return <div className="grid gap-8 lg:grid-cols-2">{renderPosts()}</div>
}

export default PostList

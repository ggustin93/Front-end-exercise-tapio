import React from 'react'
import Post from './Post'

const PostList = ({ posts, deletePost }) => {
  // function to show all the posts
  const showPosts = () => {
    if (posts.length === 0) {
      return null
    }
    return (
      <>
        {Object.keys(posts).map((post) => (
          <Post key={post} info={posts[post]} deletePost={deletePost} />
        ))}
      </>
    )
  }

  return <div className="grid gap-8 lg:grid-cols-2">{showPosts()}</div>
}

export default PostList

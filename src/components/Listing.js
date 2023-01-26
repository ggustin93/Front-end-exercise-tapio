import React, { Component } from 'react'
import Post from './Post'

class Listing extends Component {
  showPosts = () => {
    const posts = this.props.posts
    if (posts.length === 0) return null
    return (
      <React.Fragment>
        {Object.keys(posts).map((post) => (
          <Post
            key={post}
            info={this.props.posts[post]}
            deletePost={this.props.deletePost}
          />
        ))}
      </React.Fragment>
    )
  }

  render() {
    return <div className="grid gap-8 lg:grid-cols-2">{this.showPosts()}</div>
  }
}

export default Listing

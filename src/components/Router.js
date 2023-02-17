import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Blog from './Blog'
import ReadPost from './ReadPost'
import CreatePost from './CreatePost'
import EditPost from './EditPost'

import {
  getPosts,
  createPost,
  editPost,
  deletePost,
  generateAPost,
} from '../services/FirebaseService'

const Router = () => {
  // Set up state to hold the posts
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch the posts from the database and update the state
    getPosts(setPosts)
  }, [])

  return (
    // Set up the router with BrowserRouter
    <BrowserRouter>
      <section>
        {/* Add the Navigation component */}
        <Navigation />

        {/* Set up the routes with Switch */}
        <Switch>
          {/* Set up the root route */}
          <Route
            exact
            path="/"
            render={() => (
              // Render the Blog component with the posts, deletePost function, and generateAPost function as props
              <Blog
                posts={posts}
                deletePost={(postId) =>
                  deletePost(postId, (updatedPosts) => setPosts(updatedPosts))
                }
                generateAPost={() =>
                  generateAPost((updatedPosts) => setPosts(updatedPosts))
                }
              />
            )}
          />

          {/* Set up the route for individual posts */}
          <Route
            exact
            path="/post/:postId"
            render={(props) => {
              // Extract the postId from the URL
              const postId = props.match.params.postId

              // Find the post with the matching ID
              const post = posts.find((post) => post.id === postId)

              // Pass the post as a prop to the ReadPost component
              return <ReadPost post={post} />
            }}
          />

          {/* Set up the route for creating a new post */}
          <Route
            exact
            path="/create"
            render={() => (
              // Render the CreatePost component with the createPost function as a prop
              <CreatePost
                createPost={(post) =>
                  createPost(post, (updatedPosts) => setPosts(updatedPosts))
                }
              />
            )}
          />

          {/* Set up the route for editing a post */}
          <Route
            exact
            path="/edit/:postId"
            render={(props) => {
              // Extract the postId from the URL parameter
              const postId = props.match.params.postId

              // Find the post with the matching ID
              const post = posts.find((post) => post.id === postId)

              // Pass the post and editPost function as props to the EditPost component
              // calls the editPost method from the FirebaseService file passing the edited post data and a callback function to update the posts state when the edit is successful. The posts state is updated by calling the setPosts function with the updatedPosts parameter passed to the callback function.
              return (
                <EditPost
                  post={post}
                  editPost={(post) =>
                    editPost(post, (updatedPosts) => setPosts(updatedPosts))
                  }
                />
              )
            }}
          />
        </Switch>
      </section>
    </BrowserRouter>
  )
}

export default Router

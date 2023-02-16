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

function Router() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch the posts from the database and update the state
    getPosts(setPosts)
  }, [])

  return (
    <BrowserRouter>
      <section>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
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

          <Route
            exact
            path="/create"
            render={() => (
              <CreatePost
                createPost={(post) =>
                  createPost(post, (updatedPosts) => setPosts(updatedPosts))
                }
              />
            )}
          />

          <Route
            exact
            path="/edit/:postId"
            render={(props) => {
              // Extract the postId from the URL parameter
              const postId = props.match.params.postId

              // Find the post with the matching ID
              const post = posts.find((post) => post.id === postId)

              // Pass the post and editPost function as props to the EditPost component
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

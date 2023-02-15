import React, { useState, useEffect } from 'react'

import moment from 'moment'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Navigation from './Navigation'
import Blog from './Blog'
import ReadPost from './ReadPost'
import CreatePost from './CreatePost'
import EditPost from './EditPost'

import { db } from '../services/APIService'

const capitalizeFirstLowercaseRest = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// functional component, to get and set posts to state
function Router() {
  const [posts, setPosts] = useState([])

  // Use Effect hook to get all the posts on component mount
  useEffect(() => {
    getPost()
  }, [])

  // function to get posts from JSONPlaceholder API
  const getPostJSON = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      let data = res.data.splice(0, 10)
      setPosts(data)
    })
  }

  // function to get posts from Firebase Cloud Firestore
  const getPost = async () => {
    try {
      const querySnapshot = await db
        .collection('posts')
        .orderBy('datestamp', 'desc')
        .get()
      let data = []
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      })
      setPosts(data)
    } catch (error) {
      console.error(error)
    }
  }

  const deletePostJSON = (id) => {
    // Delete a post from the JSONPlaceholder API by ID
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        // If the request was successful
        if (res.status === 200) {
          // Make a copy of the current posts
          const currentPosts = [...posts]
          // Filter out the post that was deleted
          let result = currentPosts.filter((post) => post.id !== id)
          // Update the state with the new post list
          setPosts(result)
        }
      })
  }

  const deletePost = async (id) => {
    // Delete a post from Firestore by ID
    await db.collection('posts').doc(id).delete()
    // Refresh the post list
    getPost()
  }

  const createPostJSON = (post) => {
    // Create a new post on the JSONPlaceholder API
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { post })
      .then((res) => {
        // If the request was successful
        if (res.status === 201) {
          // Show a success message
          Swal.fire('Post Create', 'It is created correctly.', 'success')

          // Add an ID to the new post
          let postId = { id: res.data.id }
          const newPost = Object.assign({}, res.data.post, postId)

          // Add the new post to the state
          setPosts((prevState) => [...prevState, newPost])
        }
      })
  }

  const createPost = async (post) => {
    // Create a new post on Firestore
    const postRef = db.collection('posts').doc()
    const postToSave = {
      id: postRef.id,
      ...post,
    }
    await postRef.set(postToSave)
    // Refresh the post list
    getPost()
  }

  const generateAPost = async () => {
    try {
      // Fetching random post data from the jsonplaceholder API
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${
          Math.floor(Math.random() * 100) + 1
        }`,
      )
      const categories = [
        'Renewable Energy',
        'Transportation',
        'Waste Management',
        'Water Conservation',
        'Biodiversity',
        'Sustainable Agriculture',
        'Air Quality',
        'Sustainable Building',
      ]

      // Randomly selecting a category
      const randomIndex = Math.floor(Math.random() * categories.length)
      const rcategory = categories[randomIndex]

      // Generating a random image URL
      const randomNumber = Math.floor(Math.random() * 100)
      const randomImageUrl = `https://picsum.photos/id/${randomNumber}/650/300/`

      // Creating a new post in Firestore
      await db.collection('posts').add({
        title: data.title,
        body: capitalizeFirstLowercaseRest(data.body),
        userId: data.userId,
        category: rcategory,
        avatar: `https://i.pravatar.cc/${randomNumber}`,
        image: randomImageUrl,
        datestamp: moment().format('DD/MM/YYYY, HH:mm:ss'),
      })

      console.log('Post ajouté avec titre: ', data.title)
      Swal.fire({
        type: 'success',
        title: 'Blog post generated 🚀',
        html:
          'The post has been generated randomly, successfully, with help of <code> jsonplaceholder</code> API.',
        icon: 'success',
      }).then((result) => {
        if (result.value) {
          getPost()
        }
      })
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }

  const editPostJSON = (postUpdate) => {
    const { id } = postUpdate
    // Making a PUT request to the jsonplaceholder API to update a specific post
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { postUpdate })
      .then((res) => {
        if (res.status === 200) {
          // Showing a success alert
          Swal.fire(
            'Post Updated',
            'The changes were saved correctly.',
            'success',
          )
          let postId = res.data.id
          // Updating the post in the local state
          const currentPosts = [...posts]
          const postEdit = currentPosts.findIndex((post) => postId === post.id)

          currentPosts[postEdit] = postUpdate
          setPosts(currentPosts)
        }
      })
  }

  const editPost = async (post) => {
    // Updating the post in the Firestore
    const postRef = db.collection('posts').doc(post.id)
    await postRef.update(post)
    // Retrieving the updated post list from the Firestore
    getPost()
  }

  return (
    <BrowserRouter>
      <section>
        <Navigation />
        {/* The Switch component is used to group a set of routes together 
        and only render the first one that matches the current URL */}
        <Switch>
          {/* The Route component is used to define a specific path that 
          should match the current URL and render a specific component */}
          <Route
            exact
            path="/"
            render={() => {
              // Pass the posts state and deletePost, generateAPost function as props to the Blog component
              return (
                <Blog
                  posts={posts}
                  deletePost={deletePost}
                  generateAPost={generateAPost}
                />
              )
            }}
          />

          <Route
            exact
            path="/post/:postId"
            render={(props) => {
              // Extract the postId from the URL
              const postId = props.match.params.postId

              // Filter the posts state to find the matching post
              const post = posts.find((post) => post.id === postId)

              // Pass the filtered post as a prop to the ReadPost component
              return <ReadPost post={post} />
            }}
          />
          <Route
            exact
            path="/create"
            render={() => {
              // Pass the createPost function as a prop to the CreatePost component
              return <CreatePost createPost={createPost} />
            }}
          />
          <Route
            exact
            path="/edit/:postId"
            render={(props) => {
              // Extract the postId from the URL parameter
              const postId = props.match.params.postId
              // Find the post with the matching ID
              const post = posts.find((post) => post.id === postId)
              // Pass the filtered post and editPost function as props to the EditPost component
              return <EditPost post={post} editPost={editPost} />
            }}
          />
        </Switch>
      </section>
    </BrowserRouter>
  )
}

export default Router

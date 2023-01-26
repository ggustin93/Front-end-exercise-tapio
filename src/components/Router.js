import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import Navigation from './Navigation'
import Posts from './Posts'
import SinglePost from './SinglePost'
import CreatePost from './CreatePost'
import EditPost from './EditPost'
import { db } from './firebase'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
  apiKey: 'AIzaSyDhwxq04CIeF7226u5k8KRGLsPjk3eazs4',
  authDomain: 'my-tapio-assignment.firebaseapp.com',
  projectId: 'my-tapio-assignment',
  storageBucket: 'my-tapio-assignment.appspot.com',
  messagingSenderId: '53061974198',
  appId: '1:53061974198:web:d1b344a07c19027f45ce17',
  measurementId: 'G-QX7RMJPSTP',
} */

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
// const db = firebase.firestore()

const capitalizeFirstLowercaseRest = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
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
    const postRef = await db.collection('posts').add({
      title: data.title,
      body: capitalizeFirstLowercaseRest(data.body),
      userId: data.userId,
      category: rcategory,
      avatar: `https://i.pravatar.cc/${randomNumber}`,
      image: randomImageUrl,
      datestamp: moment().format('DD/MM/YYYY'),
    })

    console.log('Post ajouté avec ID: ', postRef.id)
    Swal.fire({
      title: 'Post généré 🚀',
      html:
        "Le post a été généré aléatoirement, avec succès, avec l'API <code> jsonplaceholder</code>. La page va se rafraîchir 🤓",
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.value) {
        window.location = '/'
      }
    })
  } catch (error) {
    console.error('Error adding document: ', error)
  }
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
  const getPost = () => {
    db.collection('posts')
      .get()
      .then((querySnapshot) => {
        let data = []
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() })
        })
        setPosts(data)
      })
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
              // Pass the posts state and deletePost function as props to the Posts component
              return <Posts posts={posts} deletePost={deletePost} />
            }}
          />

          <Route
            exact
            path="/post/:postId"
            render={(props) => {
              // Extract the postId from the URL
              let idPost = props.location.pathname.replace('/post/', '')
              // Filter the posts state to find the matching post
              let filter = posts.filter((post) => post.id === idPost)
              // Pass the filtered post as a prop to the SinglePost component
              return <SinglePost post={filter[0]} />
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
              // Extract the postId from the URL
              let idPost = props.location.pathname.replace('/edit/', '')
              // Filter the posts state to find the matching post
              let filter = posts.filter((post) => post.id === idPost)
              // Pass the filtered post and editPost function as props to the EditPost component
              return <EditPost post={filter[0]} editPost={editPost} />
            }}
          />
        </Switch>
      </section>
    </BrowserRouter>
  )
}

export default Router
export { generateAPost }

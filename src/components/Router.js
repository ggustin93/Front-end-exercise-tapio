import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

import { collection, getDocs, querySnapshot } from 'firebase/firestore'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import { Header, Navigation } from './Layout/Layout'
import Posts from './Posts'
import SinglePost from './SinglePost'
import Form from './Form'
import EditPost from './EditPost'
import { withRouter } from 'react-router-dom'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDhwxq04CIeF7226u5k8KRGLsPjk3eazs4',
  authDomain: 'my-tapio-assignment.firebaseapp.com',
  projectId: 'my-tapio-assignment',
  storageBucket: 'my-tapio-assignment.appspot.com',
  messagingSenderId: '53061974198',
  appId: '1:53061974198:web:d1b344a07c19027f45ce17',
  measurementId: 'G-QX7RMJPSTP',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore()

const generateAPost = async () => {
  try {
    // Récupération de données aléatoires d'un post depuis l'API jsonplaceholder
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${
        Math.floor(Math.random() * 100) + 1
      }`,
    )

    // Création d'un nouveau post dans Firestore
    const postRef = await db.collection('posts').add({
      title: data.title,
      body: data.body,
      userId: data.userId,
    })
    console.log('Post ajouté avec ID: ', postRef.id)
    Swal.fire({
      title: 'Post généré!',
      text: 'Le post a été généré avec succès.',
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

function Router() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPost()
  }, [])

  const getPostJSON = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      let data = res.data.splice(0, 10)
      setPosts(data)
    })
  }

  const getPost = () => {
    db.collection('posts')
      .get()
      .then((querySnapshot) => {
        let data = []
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() })
        })
        console.log('TAAAAAAAA', data)
        setPosts(data)
      })
  }

  const deletePostJSON = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const currentPosts = [...posts]
          let result = currentPosts.filter((post) => post.id !== id)
          setPosts(result)
        }
      })
  }

  const deletePost = async (id) => {
    await db.collection('posts').doc(id).delete()
    getPost()
  }

  const createPostJSON = (post) => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { post })
      .then((res) => {
        if (res.status === 201) {
          Swal.fire('Post Create', 'It is created correctly.', 'success')

          let postId = { id: res.data.id }
          const newPost = Object.assign({}, res.data.post, postId)

          setPosts((prevState) => [...prevState, newPost])
        }
      })
  }

  const createPost = async (post) => {
    const postRef = db.collection('posts').doc()
    const postToSave = {
      id: postRef.id,
      ...post,
    }
    await postRef.set(postToSave)
    getPost()
  }

  const editPostJSON = (postUpdate) => {
    const { id } = postUpdate

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { postUpdate })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire(
            'Post Updated',
            'The changes were saved correctly.',
            'success',
          )

          let postId = res.data.id

          const currentPosts = [...posts]

          const postEdit = currentPosts.findIndex((post) => postId === post.id)

          currentPosts[postEdit] = postUpdate
          setPosts(currentPosts)
        }
      })
  }

  const editPost = async (post) => {
    const postRef = db.collection('posts').doc(post.id)
    await postRef.update(post)
    getPost()
  }

  return (
    <BrowserRouter>
      <section>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Posts posts={posts} deletePost={deletePost} />
            }}
          />

          <Route
            exact
            path="/post/:postId"
            render={(props) => {
              let idPost = props.location.pathname.replace('/post/', '')

              let filter = posts.filter((post) => post.id === idPost)

              return <SinglePost post={filter[0]} />
            }}
          />
          <Route
            exact
            path="/create"
            render={() => {
              return <Form createPost={createPost} />
            }}
          />
          <Route
            exact
            path="/edit/:postId"
            render={(props) => {
              let idPost = props.location.pathname.replace('/edit/', '')
              let filter = posts.filter((post) => post.id === idPost)
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

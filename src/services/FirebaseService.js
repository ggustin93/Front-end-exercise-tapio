import firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment'
import Swal from 'sweetalert2'

import { capitalizeOnlyFirst } from '../utils/capitalizeOnlyFirst'

import {
  getRandomAvatar,
  getRandomImageUrl,
  getRandomCategory,
  getRandomJSONPlaceholderData,
} from '../utils/randomData'

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  /***/
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore()

// Create a new post in Firestore
export const createPost = async (post, setPosts) => {
  try {
    // Create a new post document reference in the Firestore database
    const postRef = db.collection('posts').doc()

    // Add an ID to the post data and save it to Firestore
    const postToSave = {
      id: postRef.id,
      ...post,
    }
    await postRef.set(postToSave)

    // Refresh the post list by querying the Firestore database
    const postsSnapshot = await db.collection('posts').get()
    const posts = postsSnapshot.docs.map((doc) => doc.data())
    setPosts(posts)
  } catch (error) {
    console.error('Error creating post:', error)
    // Handle the error (e.g., show an error message)
  }
}

export const getPosts = async (setPosts) => {
  try {
    // Get posts from Firebase Cloud Firestore in descending order
    const querySnapshot = await db
      .collection('posts')
      .orderBy('datestamp', 'desc')
      .get()

    // Convert the data from each post document to an array of post objects
    let data = []
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
    })

    // Set the posts in the parent component's state
    setPosts(data)
  } catch (error) {
    console.error(error)
  }
}

export const editPost = async (post, setPosts) => {
  try {
    // Updating the post in Firestore
    const postRef = db.collection('posts').doc(post.id)
    await postRef.update(post)
    // Refreshing the post list
    const postsSnapshot = await db.collection('posts').get()
    const posts = postsSnapshot.docs.map((doc) => doc.data())
    setPosts(posts)
  } catch (error) {
    console.error(error)
  }
}

export const deletePost = async (id, setPosts) => {
  try {
    // Delete a post from Firestore by ID
    await db.collection('posts').doc(id).delete()

    // Refresh the post list
    const postsSnapshot = await db.collection('posts').get()
    const posts = postsSnapshot.docs.map((doc) => doc.data())
    setPosts(posts)
  } catch (error) {
    console.error(error)
  }
}

export const generateAPost = async (setPosts) => {
  try {
    // Fetching random post data from the jsonplaceholder API
    const data = await getRandomJSONPlaceholderData()

    if (data) {
      // Creating a new post in Firestore
      const post = {
        title: data.title,
        body: capitalizeOnlyFirst(data.body),
        userId: data.userId,
        category: getRandomCategory(),
        avatar: getRandomAvatar(),
        image: getRandomImageUrl(),
        datestamp: moment().format('DD/MM/YYYY, HH:mm:ss'),
      }
      await createPost(post, setPosts)
      // Displaying a success message to the user
      await Swal.fire({
        type: 'success',
        title: 'Blog post generated 🚀',
        html:
          'The post has been generated randomly, successfully, with help of <code> jsonplaceholder</code> API.',
        icon: 'success',
      })
    } else {
      console.error(
        'Error adding document: Data is undefined or does not have a title property.',
      )
    }
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}

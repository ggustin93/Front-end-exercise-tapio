import axios from 'axios'

// Base URL for JSONPlaceholder API
const baseURL = 'https://jsonplaceholder.typicode.com'

// Function to get the first 10 posts from the JSONPlaceholder API
export async function getPostJSON(setPosts) {
  try {
    const { data } = await axios.get(`${baseURL}/posts`)
    setPosts(data.splice(0, 10))
  } catch (error) {
    console.error(error)
  }
}

// Function to delete a post on the JSONPlaceholder API
export async function deletePostJSON(id, setPosts) {
  try {
    await axios.delete(`${baseURL}/posts/${id}`)
    setPosts()
  } catch (error) {
    console.error(error)
  }
}

// Function to create a new post on the JSONPlaceholder API
export async function createPostJSON(post, setPosts) {
  try {
    const { data } = await axios.post(`${baseURL}/posts`, post)
    const postId = data.id
    const newPost = { id: postId, ...post }
    setPosts(newPost)
  } catch (error) {
    console.error(error)
  }
}

// Function to update an existing post on the JSONPlaceholder API
export async function editPostJSON(postUpdate, setPosts) {
  try {
    const { id } = postUpdate
    const { data } = await axios.put(`${baseURL}/posts/${id}`, postUpdate)
    setPosts(data)
  } catch (error) {
    console.error(error)
  }
}

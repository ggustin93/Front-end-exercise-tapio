import { categoryOptions } from './categoryOptions'
import axios from 'axios'

export function getRandomAvatar() {
  const randomNumber = Math.floor(Math.random() * 100)
  return `https://i.pravatar.cc/${randomNumber}`
}

export function getRandomImageUrl() {
  const randomNumber = Math.floor(Math.random() * 100)
  return `https://picsum.photos/id/${randomNumber}/650/300/`
}

export function getRandomCategory() {
  // Randomly selecting a category
  const randomIndex = Math.floor(Math.random() * categoryOptions.length)
  return categoryOptions[randomIndex].value
}
export async function getRandomJSONPlaceholderData() {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${
        Math.floor(Math.random() * 100) + 1
      }`,
    )
    return data
  } catch (error) {
    console.error(error)
  }
}

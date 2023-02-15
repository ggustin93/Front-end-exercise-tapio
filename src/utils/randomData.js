export function getRandomAvatar() {
  const randomNumber = Math.floor(Math.random() * 100)
  return `https://i.pravatar.cc/${randomNumber}`
}

export function getRandomImageUrl() {
  const randomNumber = Math.floor(Math.random() * 100)
  return `https://picsum.photos/id/${randomNumber}/650/300/`
}

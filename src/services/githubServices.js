import config from '../config'

const { GH_KEYS: { CLIENT_ID, CLIENT_SECRET } } = config

export const getUserData = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  )
  const data = await response.json()
  if (!data.message) {
    return {
      avatar: data.avatar_url,
      profileUrl: data.html_url,
      name: data.name,
      userName: data.login,
      followers: data.followers,
      following: data.following,
      publicRepos: data.public_repos
    }
  }

  return null
}

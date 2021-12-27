import config from '../config'

const { GH_KEYS: { CLIENT_ID, CLIENT_SECRET } } = config
const baseUrl = 'https://api.github.com/users'

const getUserData = async (username) => {
  const response = await fetch(
    `${baseUrl}/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
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

const getReposGH = async (username) => {
  const response = await fetch(
    `${baseUrl}/${username}/repos?per_page=10&sort=created:asc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  )

  const data = await response.json()

  if (!data.message) {
    return data.map((data) => {
      return {
        id: data.id,
        name: data.name,
        htmlurl: data.html_url,
        description: data.description,
        language: data.language
      }
    })
  }
  return null
}

export {
  getUserData,
  getReposGH
}

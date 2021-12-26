import { useEffect, useState } from 'react'
import { getUserData } from '../services/githubServices'

export const useGetProfileGH = (userName) => {
  const [profile, setProfile] = useState({
    loading: true,
    data: []
  })

  useEffect(() => {
    getUserData(userName)
      .then(data => setProfile({
        loading: false,
        data
      }))
  }, [userName])

  return profile
}

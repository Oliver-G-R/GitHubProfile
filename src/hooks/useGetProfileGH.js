import { useEffect, useState } from 'react'
import { getUserData, getReposGH } from 'services/githubServices'

export const useGetProfileGH = (userName) => {
  const [profile, setProfile] = useState({
    loading: true,
    data: []
  })

  useEffect(() => {
    Promise.allSettled([
      getUserData(userName),
      getReposGH(userName)
    ]).then(([userData, repos]) => {
      const [user, reposGH] = [userData.value, repos.value]
      setProfile({
        loading: false,
        data: {
          user,
          reposGH
        }
      })
    })
  }, [userName])

  return profile
}

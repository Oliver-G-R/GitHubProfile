import { useState } from 'react'
import stylesHome from '../styles/Home.module.scss'
import { SearchForm } from '../components/SearchForm'
import { HeadInfo } from '../components/HeadInfo'
import { CardProfile } from '../components/CardProfile'
import { useGetProfileGH } from '../hooks/useGetProfileGH'
import { Alert } from '../components/Alert'
import { Loading } from '../components/Loading'
import { CardProjects } from '../components/CardProjects'
import { ContentCardProjects } from '../components/ContentCardProjects'

export default function Home () {
  const [profileSearch, setProfileSearch] = useState('Oliver-G-R')

  const {
    data: {
      user,
      reposGH
    }, loading
  } = useGetProfileGH(profileSearch)
  console.log(user, reposGH)

  return (
    <>
      <HeadInfo title="Github Profile" />
      <div className="global-container">
        <main className={stylesHome.main}>
            <h1 className={stylesHome.title}>Github Profile</h1>
            <SearchForm setProfileSearch={setProfileSearch} />
            {loading ? <Loading/> : <RenderAllSectionProfile user={user} reposGH={reposGH}/> }
        </main>
      </div>
    </>
  )
}

const RenderAllSectionProfile = ({ user, reposGH }) => {
  return (
    <>
      {user
        ? <CardProfile {...user} />
        : <Alert
        type="warning" >Profile Not Found</Alert>}
      {user && <ContentCardProjects>
        {reposGH && reposGH.length > 0
          ? reposGH.map(repo => <CardProjects key={repo.id} {...repo} />)
          : <Alert>
              Repositories Not Found
            </Alert>}
      </ContentCardProjects>}
    </>
  )
}

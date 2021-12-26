import { useState } from 'react'
import stylesHome from '../styles/Home.module.scss'
import { SearchForm } from '../components/SearchForm'
import { HeadInfo } from '../components/HeadInfo'
import { CardProfile } from '../components/CardProfile'
import { useGetProfileGH } from '../hooks/useGetProfileGH'
import { Alert } from '../components/Alert'
import { Loading } from '../components/Loading'

export default function Home () {
  const [profileSearch, setProfileSearch] = useState('Oliver-G-R')

  const { data: profile, loading } = useGetProfileGH(profileSearch)

  return (
    <>
      <HeadInfo title="Github Profile" />
      <div className="global-container">
        <main className={stylesHome.main}>
            <h1 className={stylesHome.title}>Github Profile</h1>
            <SearchForm setProfileSearch={setProfileSearch} />

            {loading ? <Loading/> : <RenderCardProfile profile={profile}/> }
        </main>
      </div>
    </>
  )
}

const RenderCardProfile = ({ profile }) => {
  return profile
    ? (
    <CardProfile {...profile} />
      )
    : <Alert type="warning" >Profile Not Found</Alert>
}

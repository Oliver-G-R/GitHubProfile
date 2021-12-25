import { useState } from 'react'
import stylesHome from '../styles/Home.module.css'
import { SearchForm } from '../components/SearchForm'
import { HeadInfo } from '../components/HeadInfo'
import { CardProfile } from '../components/CardProfile'
import { useGetProfileGH } from '../hooks/useGetProfileGH'

export default function Home() {
  const [profileSearch, setProfileSearch] = useState('Oliver-G-R')

  const {data: profile, loading} = useGetProfileGH(profileSearch)

  return (
    
    <>
      <HeadInfo title="Github Profile" />
      <div className="global-container">
        <main className={stylesHome.main}> 
            <h1 className={stylesHome.title}>Github Profile</h1>
            <SearchForm setProfileSearch={setProfileSearch} />

            {loading && <p>Loading...</p>}
            {profile && !loading ? <CardProfile {...profile} /> : <p>No profile found</p>} 
        </main>
      </div>
    </>
  )
}

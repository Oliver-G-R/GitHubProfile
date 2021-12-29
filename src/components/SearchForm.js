import { useState } from 'react'
import { Alert } from './Alert'

export const SearchForm = ({ setProfileSearch }) => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const regexUserNameGithub = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i

  const handleChange = (e) => {
    const { value } = e.target
    setSearch(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (regexUserNameGithub.test(search)) {
      setProfileSearch(search)
      setSearch('')
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
        <>
            <form onSubmit={handleSubmit} >
                    <input
                        onChange={handleChange}
                        type="text"

                        value={search}
                        placeholder="Search user name"
                        />

                    <button
                        type="submit">
                        Search
                    </button>

            </form>
            {error && <Alert showAlert={setError} type="danger" >
                User not valid
            </Alert>}

            <style jsx>{`
                form {
                    background-color: var(--color-secondary);
                    border-radius: 1rem;
                    display: flex; 
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.2rem;
                    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);

                }

                form input {
                    color:var(--text-color-primary);
                    height: 100%;
                    width: 90%;
                    background: transparent;
                    margin-right: 1rem;
                }

                form button {
                    color: var(--text-color-btn);
                    border-radius: 1rem;
                    cursor: pointer;
                    font-weight: 700;
                    padding: 1rem;
                    font-size: 1.5rem;
                    background-color: var(--color-tertiary);
                    transition: all 0.3s ease-in-out;
                    &:hover{
                      opacity: .8;
                    }
                }
            `}</style>
        </>
  )
}

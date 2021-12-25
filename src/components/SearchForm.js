import { useState } from "react";

export const SearchForm = ({ setProfileSearch }) => {
    const [search, setSearch] = useState('');
    
    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setProfileSearch(search);
        setSearch('');
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

            <style jsx>{`
                form {
                    background-color: var(--color-secondary);
                    border-radius: 1rem;
                    display: flex; 
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.2rem;
                }

                form input {
                    color: #fff;
                    height: 100%;
                    width: 90%;
                    background: transparent;
                }

                form button {
                    color: var(--text-color-primary);
                    border-radius: 1rem;
                    cursor: pointer;
                    font-weight: 700;
                    padding: 1rem;
                    font-size: 1.5rem;
                    background-color: var(--color-tertiary);
                }
            `}</style>
        </>
    )
}

import { useContext } from 'react'
import { ThemeUserContext } from '../context/ThemUser'
export const ToggleDark = () => {
  const { theme, setTheme } = useContext(ThemeUserContext)
  return (
      <>
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                {theme === 'dark'
                  ? <span>🌑</span>
                  : <span>☀️</span>}
            </button>

            <style jsx>{`
                button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: auto;
                    background-color: var(--color-primary);
                    height: 3.4rem;
                    cursor: pointer;
                    width: 3.4rem;
                    border-radius: .5rem;
                    -webkit-border-radius: .5rem;
                    -moz-border-radius: .5rem;
                    -ms-border-radius: .5rem;
                    -o-border-radius: .5rem;
                    outline: none;
                    border: none;
                    transition: all 0.3s ease-in-out;

                    span{
                      font-size: 3rem;
                    }
                }

            `}</style>
        </>
  )
}

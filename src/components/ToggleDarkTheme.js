import { useContext, useEffect, useState } from 'react'
import { ThemeUserContext } from 'context/ThemUser'
import { MoonIcon } from 'assets/moon-icon'
import { SunIcon } from 'assets/sun-icon'
export const ToggleDark = () => {
  const { theme, setTheme } = useContext(ThemeUserContext)

  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return (
      <>
            <button
                className={[`${theme === 'dark' ? 'activ' : ''}`]}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                {theme === 'dark'
                  ? <MoonIcon fill="var(--text-color-primary)"/>
                  : <SunIcon fill="var(--text-color-primary)"/>}
            </button>

            <style jsx>{`
                button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: auto;
                    background-color: var(--color-primary);
                    height: 3rem;
                    cursor: pointer;
                    width: 3rem;
                    border-radius: .5rem;
                    -webkit-border-radius: .5rem;
                    -moz-border-radius: .5rem;
                    -ms-border-radius: .5rem;
                    -o-border-radius: .5rem;
                    outline: none;
                    border: none;
                    transition: all 0.3s ease-in-out;

                    
                    &.activ{
                        background-color: #f6ad55;
                        transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        -moz-transform: rotate(360deg);
                        -ms-transform: rotate(360deg);
                        -o-transform: rotate(360deg);
                    }

                }

            `}</style>
        </>
  )
}

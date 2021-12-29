import { createContext, useEffect } from 'react'

import { UseLocalStorage } from '../hooks/UseLocalStorage'

const initialValues = {
  theme: 'light',
  setTheme: (theme) => {}
}

const ThemeUserContext = createContext(initialValues)

const ThemeUserProvider = ({ children }) => {
  const [theme, setTheme] = UseLocalStorage('theme', 'dark')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
        <>
            <ThemeUserContext.Provider value={{ theme, setTheme }} >
                {children}
            </ThemeUserContext.Provider>

            <style jsx global>{`
                    :root{
                        --color-primary: #F6F8FC;
                        --color-secondary: #EDEFF3;
                        --color-tertiary: #3734ff98;
                        --text-color-primary: #0d1017;
                        --text-color-seconday: #0a0a0a;
                        --text-color-btn: #F6F8FC;
                        --bg-radial: radial-gradient(circle, var(--color-primary) 0%, var(--color-secondary) 100%);
                    }

                    [data-theme="dark"]{
                        --color-primary: #161a22;
                        --color-secondary: #0d1017;
                        --color-tertiary: #3934ff;
                        --text-color-primary: #ebebeb;
                        --text-color-seconday: #b3b3b3;
                        --text-color-btn: #F6F8FC;
                        --bg-radial: radial-gradient(circle, var(--color-primary) 0%, var(--color-secondary) 100%);
                    }
            `}</style>
        </>
  )
}

export {
  ThemeUserContext,
  ThemeUserProvider
}

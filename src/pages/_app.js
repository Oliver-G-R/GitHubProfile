/* import { ThemeUserProvider } from '../context/ThemUser' */
import { ThemeUserProvider } from '../context/ThemUser'
import '../styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  return <ThemeUserProvider>
    <Component {...pageProps} />
  </ThemeUserProvider>
}

export default MyApp

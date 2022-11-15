import '../../styles/globals.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/pures/NavBar'

export default function App ({ Component, pageProps }: AppProps) {
  return (
  <>
  <NavBar></NavBar>
  <Component {...pageProps} />
  </>
  )
}

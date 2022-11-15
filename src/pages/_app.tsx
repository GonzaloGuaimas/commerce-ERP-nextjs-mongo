import '../../styles/globals.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/pures/NavBar'
import { PageHeader } from '../components/pures/PageHeader'

export default function App ({ Component, pageProps }: AppProps) {
  return (
  <>
  <NavBar></NavBar>
  <PageHeader></PageHeader>
  <Component {...pageProps} />
  </>
  )
}

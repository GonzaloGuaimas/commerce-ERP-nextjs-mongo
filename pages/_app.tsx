import '../styles/globals.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

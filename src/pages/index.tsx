import Head from 'next/head'
import { Button } from 'primereact/button'

export default function Home () {
  return (
    <div>
      <Head>
        <title>SISTEMA</title>
        <meta name="sistema" content="created by Omega" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button label='Save' icon='pi pi-check'></Button>
    </div>
  )
}

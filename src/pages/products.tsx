import Head from 'next/head'
import { Button } from 'primereact/button'
import { Panel } from 'primereact/panel'
import { TabPanel, TabView } from 'primereact/tabview'
import { SidePanelProduct } from '../components/products/SidePanelProduct'
import { TableProducts } from '../components/products/TableProducts'
import { ButtonAdd } from '../components/pures/ButtonAdd'

export default function Products () {
  const data = [{
    code: 'as12',
    name: 'asd',
    description: 'asddas',
    price: 1200
  },
  {
    code: 'aqwesa32',
    name: 'juann',
    description: 'asddas',
    price: 1200
  },
  {
    code: 'as12543',
    name: 'patoo',
    description: 'asddas',
    price: 1200
  },
  {
    code: 'as12',
    name: 'asd',
    description: 'asddas',
    price: 1200
  },
  {
    code: 'aqwesa32',
    name: 'juann',
    description: 'asddas',
    price: 1200
  },
  {
    code: 'as12543',
    name: 'patoo',
    description: 'asddas',
    price: 1200
  }
  ]
  const PanelHeader = (
    <div className='main-panel-header'>
      <span className='p-panel-title' style={{ flex: '1rem' }}>Articulos</span>
      <ButtonAdd title={'Nuevo Artículo'} onClick={undefined}></ButtonAdd>
    </div>
  )
  return (
    <div>
      <Head>
        <title>SISTEMA - Productos</title>
        <meta name="sistema" content="created by Omega" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TabView>
        <TabPanel header="Articulos">
          <div className='main-container'>
            <Panel header={PanelHeader} style={{ flex: '2' }}>
                <TableProducts products={data}></TableProducts>
            </Panel>
            <SidePanelProduct></SidePanelProduct>
          </div>
        </TabPanel>
        <TabPanel header="Stock">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
        </TabPanel>
        <TabPanel header="Movimiento de Stock">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </TabPanel>
        <TabPanel header="Categorías">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </TabPanel>
    </TabView>
    </div>
  )
}

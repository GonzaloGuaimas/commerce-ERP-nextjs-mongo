import Head from 'next/head'
import { Button } from 'primereact/button'
import { Panel } from 'primereact/panel'
import { TabPanel, TabView } from 'primereact/tabview'
import { SidePanelOrders } from '../components/orders/SidePanelOrder'
import { TableOrders } from '../components/orders/TableOrder'

export default function Orders () {
  const data = [{
    _id: 'as12',
    code: 23,
    createdAt: '2018-09-18T16:39:22.184Z',
    date: '2018-09-18T16:39:22.184Z',
    comment: 'as12',
    payment_method: 'as12',
    status: 'as12',
    total: 1,
    profit: 1,
    location: 1,
    employee: 1,
    customer: 1,
    detail: [
      {
        _id: 'asdasa',
        code: 345435,
        name: 'product name',
        description: 'product description',
        cost: 1,
        price: 1,
        size: 1,
        color: 1
      },
      {
        _id: 'asdasa',
        code: 345435,
        name: 'product name',
        description: 'product description',
        cost: 1,
        price: 1,
        size: 1,
        color: 1
      }
    ],
    payments: [
      {
        _id: 'asdasd',
        code: 12321,
        createdAt: '2018-09-18T16:39:22.184Z',
        name: 'mercado pago',
        date: '2018-09-18T16:39:22.184Z',
        ammount: 1000
      }
    ]
  },
  {
    _id: 'adsadas',
    code: 23,
    createdAt: '2018-10-18T16:39:22.184Z',
    date: '2018-10-18T16:39:22.184Z',
    comment: 'asdsaasda',
    payment_method: 'asasdasd12',
    status: 'aasdasdass12',
    total: 1,
    profit: 1,
    location: 1,
    employee: 1,
    customer: 1,
    detail: [
      {
        _id: 'asdasa',
        code: 345435,
        name: 'product name',
        description: 'product description',
        cost: 1,
        price: 1,
        size: 1,
        color: 1
      },
      {
        _id: 'asdasa',
        code: 345435,
        name: 'product name',
        description: 'product description',
        cost: 1,
        price: 1,
        size: 1,
        color: 1
      }
    ],
    payments: [
      {
        _id: 'asdasd',
        code: 12321,
        createdAt: '2018-09-18T16:39:22.184Z',
        name: 'mercado pago',
        date: '2018-09-18T16:39:22.184Z',
        ammount: 1000
      }
    ]
  }
  ]
  const PanelHeaderSales = (
    <div className='main-panel-header'>
      <span className='p-panel-title' style={{ flex: '1rem' }}>Ventas</span>
      <Button label="Nuevo Articulo" icon={'pi pi-plus'} className="p-button-raised p-button-success" style={{ height: '10px', flex: '0.2' }}/>
    </div>
  )
  return (
    <div>
      <Head>
        <title>SISTEMA - Ventas</title>
        <meta name="sistema" content="created by Omega" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TabView>
        <TabPanel header="Ventas">
          <div className='main-container'>
            <Panel header={PanelHeaderSales} style={{ flex: '2' }}>
                <TableOrders orders={data}></TableOrders>
            </Panel>
            <SidePanelOrders order={data[0]}></SidePanelOrders>
          </div>
        </TabPanel>
        <TabPanel header="Movimientos de Caja">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
        </TabPanel>
        <TabPanel header="Arqueos de Caja">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </TabPanel>
    </TabView>
    </div>
  )
}

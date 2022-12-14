import Head from 'next/head'
import { Panel } from 'primereact/panel'
import { TabPanel, TabView } from 'primereact/tabview'
import { TableOrderDetail } from '../components/order/TableOrderDetail'
import { SidePanelOrders } from '../components/orders/SidePanelOrder'
import { SidePanelOrder } from '../components/order/SidePanelOrder'
import { TableOrders } from '../components/orders/TableOrder'
import { SidePanelCash } from '../components/cash_flow/SidePanelCash'
import { SidePanelCashBalance } from '../components/cash_balance/SidePanelCashBalance'
import { TableCashFlow } from '../components/cash_flow/TableCashFlow'
import { TableCashBalance } from '../components/cash_balance/TableCashBalance'
import { Button } from 'primereact/button'
import { ButtonAdd } from '../components/pures/ButtonAdd'

export default function Orders () {
  const detail = [{
    _id: 'asdasa',
    code: 345435,
    name: 'product name',
    description: 'product description',
    cost: 1,
    price: 1,
    size: 1,
    color: 1
  }]
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
  const PanelHeaderOrder = (
    <div className='main-panel-header'>
      <span className='p-panel-title' style={{ flex: '1rem' }}>Nueva Venta</span>
    </div>
  )
  const PanelHeaderOrders = (
    <div className='main-panel-header'>
      <span className='p-panel-title' style={{ flex: '1rem' }}>Ventas</span>
    </div>
  )
  const PanelHeaderCashFlow = (
    <div className='main-panel-header'>
      <span className='p-panel-title' style={{ flex: '1rem' }}>Movimiento de Caja</span>
    </div>
  )
  const PanelHeaderCashBalance = (
    <div className='main-panel-header-buttons'>
      <span className='p-panel-title' style={{ flex: '1rem' }}>Arqueo de Caja</span>
      <ButtonAdd title={'Nuevo Arqueo'} onClick={undefined}></ButtonAdd>
    </div>
  )
  return (
    <div style={{ height: '80vh' }}>
      <Head>
        <title>SISTEMA - Ventas</title>
        <meta name="sistema" content="created by Omega" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TabView>
        <TabPanel header="Venta">
          <div className='main-container'>
            <Panel header={PanelHeaderOrder} style={{ flex: '2' }}>
                <TableOrderDetail detail={detail}></TableOrderDetail>
            </Panel>
            <SidePanelOrder order={data[0]}></SidePanelOrder>
          </div>
        </TabPanel>
        <TabPanel header="Ventas">
          <div className='main-container'>
            <Panel header={PanelHeaderOrders} style={{ flex: '2' }}>
                <TableOrders orders={data}></TableOrders>
            </Panel>
            <SidePanelOrders order={data[0]}></SidePanelOrders>
          </div>
        </TabPanel>
        <TabPanel header="Movimientos de Caja">
          <div className='main-container'>
            <Panel header={PanelHeaderCashFlow} style={{ flex: '2' }}>
                <TableCashFlow cashFlow={[]}></TableCashFlow>
            </Panel>
            <SidePanelCash></SidePanelCash>
          </div>
        </TabPanel>
        <TabPanel header="Arqueos de Caja">
          <div className='main-container'>
            <Panel header={PanelHeaderCashBalance} style={{ flex: '2' }}>
                <TableCashBalance cashBalance={[]}></TableCashBalance>
            </Panel>
            <SidePanelCashBalance></SidePanelCashBalance>
          </div>
        </TabPanel>
    </TabView>
    </div>
  )
}

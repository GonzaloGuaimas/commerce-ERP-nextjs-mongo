import { Button } from 'primereact/button'
import { Panel } from 'primereact/panel'
import { ScrollPanel } from 'primereact/scrollpanel'
import React, { useState } from 'react'
import { Order } from '../../@types'
import { FieldText } from '../pures/FieldText'
import { PaymentItem } from '../pures/orders/PaymentItem'
import { PaymentDialog } from '../pures/PaymentDialog'
export const SidePanelOrder = ({ order }: { order: Order }) => {
  const payment = {
    _id: 'asdasd',
    code: 12321,
    createdAt: '2018-09-18T16:39:22.184Z',
    name: 'mercado pago',
    date: '2018-09-18T16:39:22.184Z',
    ammount: 1000
  }
  const [showPaymentDialog, setShowPaymentDialog] = useState(false)
  return (
    <>
      <Panel header='TOTAL' style={{ flex: '1' }}>
          <ScrollPanel style={{ width: '100%', height: '60vh' }}>
              <div className='form-container'>
                  <FieldText title={'Fecha'} content={'12/06/2022'}></FieldText>
                  <FieldText title={'Estado'} content={'Pendiente'}></FieldText>
              </div>
              <Button label="Agregar Pago" onClick={() => setShowPaymentDialog(true)} icon='pi pi-plus' className="p-button-success" style={{ width: '100%' }} />
              <div className='form-container'>
                <PaymentItem payment={payment}/>
              </div>
              <div className='total-item'>
                  <h1>Total: $12.000</h1>
              </div>
          </ScrollPanel>
      </Panel>
      <PaymentDialog showDialog={showPaymentDialog} setShowDialog={() => setShowPaymentDialog(false)}></PaymentDialog>
    </>
  )
}

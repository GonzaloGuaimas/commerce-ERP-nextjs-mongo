import { Panel } from 'primereact/panel'
import { ScrollPanel } from 'primereact/scrollpanel'
import { Accordion, AccordionTab } from 'primereact/accordion'
import React from 'react'
import { Order, OrderDetail, Payment } from '../../@types'
import { FieldText } from '../pures/FieldText'
import { DetailItem } from '../pures/order/DetailItem'
import { PaymentItem } from '../pures/order/PaymentItem'
export const SidePanelOrder = ({ order }: { order: Order }) => {
  return (
    <Panel header='VENTA' style={{ flex: '1' }}>
        <ScrollPanel style={{ width: '100%', height: '60vh' }}>
            <div className='form-container'>
                <FieldText title={'Fecha'} content={'12/06/2022'}></FieldText>
                <FieldText title={'Sucursal'} content={'Numero 1'}></FieldText>
                <FieldText title={'Estado'} content={'Pendiente'}></FieldText>
            </div>
            <Accordion>
                <AccordionTab header="Detalle">
                    <div className='form-container'>
                        {order.detail.map((item: OrderDetail, index) => {
                          return (
                            <DetailItem key={index} product={item}/>
                          )
                        })}
                    </div>
                    <div className='total-item'>
                        <h3>Total: $12.000</h3>
                    </div>
                </AccordionTab>
                <AccordionTab header="Pagos">
                    <div className='form-container'>
                        {order.payments.map((item: Payment, index) => {
                          return (
                            <PaymentItem key={index} payment={item}/>
                          )
                        })}
                    </div>
                </AccordionTab>
            </Accordion>
        </ScrollPanel>
    </Panel>
  )
}

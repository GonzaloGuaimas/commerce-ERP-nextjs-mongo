import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { Panel } from 'primereact/panel'
import { ScrollPanel } from 'primereact/scrollpanel'
import React from 'react'
import { FlowType } from '../../@types'

export const SidePanelCash = () => {
  return (
    <Panel header='NUEVO MOVIMIENTO' style={{ flex: '1' }}>
        <ScrollPanel style={{ width: '100%', height: '60vh' }}>
            <div className='form-container'>
                <div className="field">
                    <label htmlFor="payment_method">Medio de Pago</label>
                    <Dropdown options={['EFECTIVO', 'DEBITO', 'TRANSFERENCIA']}/>
                </div>
                <div className="field">
                    <label htmlFor="flow_type">Tipo</label>
                    <Dropdown id='flow_type' options={[FlowType.EGRESO, FlowType.INGRESO]}/>
                </div>
                <div className="field">
                    <label htmlFor="ammount">Monto</label>
                    <InputNumber id="ammount" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="field">
                    <label htmlFor="comment">Comentario</label>
                    <InputText id="comment"/>
                </div>
                <Button type='submit' label="Guardar" className="p-button-success" />
            </div>
        </ScrollPanel>
    </Panel>
  )
}

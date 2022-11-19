import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { Panel } from 'primereact/panel'
import { ScrollPanel } from 'primereact/scrollpanel'
import React, { useState } from 'react'
import { FlowType } from '../../@types'
import { ConfirmationDialog } from '../pures/ConfirmationDialog'
import { EmployeeDialogSelector } from '../pures/EmployeeDialogSelector'
import { FieldDate } from '../pures/FieldDate'
import { FieldSelection } from '../pures/FieldSelection'
import { FieldTime } from '../pures/FieldTime'
import { ToastMessage } from '../pures/ToastMessage'

export const SidePanelCash = () => {
  const [showEmployeeDialog, setShowEmployeeDialog] = useState(false)
  const [activeToast, setActiveToast] = useState(false)
  const [confirmDialog, setConfirmDialog] = useState(false)

  function activarToast () {
    setActiveToast(true)
    console.log('entratoas')
    setTimeout(() => {
      setActiveToast(false)
    }, 4000)
  }
  return (
    <>
        <Panel header='NUEVO MOVIMIENTO' style={{ flex: '1' }}>
            <ScrollPanel style={{ width: '100%', height: '60vh' }}>
                <div className='form-container'>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <FieldDate selectedDate={undefined} setSelectedDate={undefined}></FieldDate>
                        <FieldTime selectedTime={undefined} setSelectedTime={undefined}></FieldTime>
                    </div>
                    <FieldSelection title={'Empleado'} content={'-'} onClick={() => setShowEmployeeDialog(true)}></FieldSelection>
                    <div className="field" style={{ marginTop: '3px' }}>
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
                    <Button type='submit' label="Guardar" className="p-button-success" onClick={() => setConfirmDialog(true)}/>
                </div>
            </ScrollPanel>
        </Panel>
        <EmployeeDialogSelector showDialog={showEmployeeDialog} customers={[]} setShowDialog={setShowEmployeeDialog}></EmployeeDialogSelector>
        <ConfirmationDialog visible={confirmDialog} hide={setConfirmDialog} message={'Está seguro de Guardar?'} title={'Confirmación'} accept={() => activarToast()} reject={undefined}></ConfirmationDialog>
        {activeToast ? <ToastMessage title={'Realizado'} subTitle={'Movimiento Guardado'} type={'success'}></ToastMessage> : null}
    </>
  )
}

import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import React from 'react'

export const PaymentDialog = ({ showDialog, setShowDialog }: { showDialog: boolean, setShowDialog: any }) => {
  return (
    <Dialog header="Agregar Pago" visible={showDialog} onHide={setShowDialog} breakpoints={{ '960px': '75vw' }} style={{ width: '30vw' }}>
        <div className='form-container'>
            <div className="field">
                <label htmlFor="code">Forma Pago</label>
                <Dropdown options={['EFECTIVO', 'DEBITO', 'TRANSFERENCIA']}/>
            </div>
            <div className="field">
                <label htmlFor="code">Importe</label>
                <InputNumber id="price" value={0} mode="currency" currency="USD" locale="en-US" />
            </div>
        </div>
    </Dialog>
  )
}

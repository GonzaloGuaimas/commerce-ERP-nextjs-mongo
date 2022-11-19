import { Accordion, AccordionTab } from 'primereact/accordion'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { Panel } from 'primereact/panel'
import { ScrollPanel } from 'primereact/scrollpanel'
import React, { useState } from 'react'
import { FlowType } from '../../@types'
import { EmployeeDialogSelector } from '../pures/EmployeeDialogSelector'
import { FieldDate } from '../pures/FieldDate'
import { FieldLabel } from '../pures/FieldLabel'
import { FieldSelection } from '../pures/FieldSelection'
import { FieldText } from '../pures/FieldText'
import { FieldTime } from '../pures/FieldTime'

export const SidePanelCashBalance = () => {
  const [showEmployeeDialog, setShowEmployeeDialog] = useState(false)
  return (
    <>
        <Panel header='ARQUEO DE CAJA' style={{ flex: '1' }}>
            <ScrollPanel style={{ width: '100%', height: '60vh' }}>
                <div className='form-container'>
                    <FieldText title={'Creado por'} content={'Gonzalo X'}></FieldText>
                    <FieldText title={'Sucursal'} content={'Santiago'}></FieldText>
                    <FieldText title={'Estado'} content={'Abierto'}></FieldText>
                </div>
                <Accordion>
                    <AccordionTab header="Sistema">
                        <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                            <FieldLabel title={'EFECTIVO INICIAL'} content={'$432.1'}></FieldLabel>
                            <FieldLabel title={'INGRESO'} content={'$1.432,1'}></FieldLabel>
                            <div className='form-container'>
                                <FieldText title={'Efectivo'} content={'$2.454'}></FieldText>
                            </div>
                            <div className='form-container'>
                                <FieldText title={'Débito'} content={'$2.454'}></FieldText>
                            </div>
                            <div className='form-container'>
                                <FieldText title={'Crédito'} content={'$2.454'}></FieldText>
                            </div>
                            <div className='form-container'>
                                <FieldText title={'Transferencia'} content={'$2.454'}></FieldText>
                            </div>
                            <FieldLabel title={'EGRESO'} content={'$-1.432,1'}></FieldLabel>
                            <div className='total-item'>
                                <h3>Total: $12.000</h3>
                            </div>
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Empleado">
                        <div className='form-container'>
                            <div className="field">
                                <label htmlFor="cash">Efectivo</label>
                                <InputNumber id="cash" mode="currency" currency="USD" locale="en-US"/>
                            </div>
                            <div className="field">
                                <label htmlFor="debit">Débito</label>
                                <InputNumber id="debit" mode="currency" currency="USD" locale="en-US"/>
                            </div>
                            <div className="field">
                                <label htmlFor="credit">Crédito</label>
                                <InputNumber id="credit" mode="currency" currency="USD" locale="en-US"/>
                            </div>
                            <div className="field">
                                <label htmlFor="transfer">Transferencia</label>
                                <InputNumber id="transfer" mode="currency" currency="USD" locale="en-US"/>
                            </div>
                            <div className="field">
                                <label htmlFor="comment">Comentario</label>
                                <InputText id="comment"/>
                            </div>
                        </div>
                    </AccordionTab>
                </Accordion>
                <div className='form-container'>
                    <FieldLabel title={'Diferencia'} content={'$432.1'}></FieldLabel>
                </div>
            </ScrollPanel>
        </Panel>
        <EmployeeDialogSelector showDialog={showEmployeeDialog} customers={[]} setShowDialog={setShowEmployeeDialog}></EmployeeDialogSelector>
    </>
  )
}

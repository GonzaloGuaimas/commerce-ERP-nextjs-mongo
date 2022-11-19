import React, { useRef, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dropdown } from 'primereact/dropdown'
import { CashFlow, PriceListEnum } from '../../@types'
import { FieldSelection } from '../pures/FieldSelection'
import { CustomerDialogSelector } from '../pures/CustomerDialogSelector'
import { EmployeeDialogSelector } from '../pures/EmployeeDialogSelector'
import { FieldDate } from '../pures/FieldDate'
import { FieldTime } from '../pures/FieldTime'
import { Calendar } from 'primereact/calendar'

export const TableCashFlow = ({ cashFlow }: { cashFlow: CashFlow[] }) => {
  const [globalFilter, setGlobalFilter] = useState(null)
  const [selectedProducts, setSelectedProducts] = useState(null)
  const [showCustomerDialog, setShowCustomerDialog] = useState(false)
  const [showEmployeeDialog, setShowEmployeeDialog] = useState(false)
  const [selectedDate, setSelectedDate] = useState()
  const dtRef = useRef(null)
  const schedule = ['MAÑANA', 'TARDE']
  const header = (
    <div className="table-header">
        <div className='table-subheader'>
          <h5 className="mx-0 my-1">Filtros</h5>
          <Calendar selectionMode="multiple" value={selectedDate} onChange={(e) => setSelectedDate(e.value)} showIcon></Calendar>
          <Dropdown value={schedule[0]} options={schedule} onChange={(e) => console.log('asd')} placeholder="Turno"/>
          <Dropdown value={schedule[0]} options={['EFECTIVO', 'DEBITO', 'TRANSFERENCIA']} placeholder="Metodo Pago"/>
          <FieldSelection title={'Cliente'} content={'-'} onClick={() => setShowCustomerDialog(true)}></FieldSelection>
         </div>
    </div>
  )

  return (
    <>
      <DataTable ref={dtRef} value={cashFlow} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id" paginator rows={5}
        paginatorTemplate="PrevPageLink PageLinks NextPageLink"
        globalFilter={globalFilter} header={header} responsiveLayout="scroll">
        <Column field="date" header="Fecha" style={{ width: 'auto' }}></Column>
        <Column field="time" header="Hora" style={{ width: 'auto' }}></Column>
        <Column field="flow_type" header="Tipo" style={{ width: 'auto' }}></Column>
        <Column field="payment_method" header="Método Pago" style={{ width: 'auto' }}></Column>
        <Column field="employee" header="Empleado" style={{ width: 'auto' }}></Column>
        <Column field="ammount" header="Monto" style={{ width: 'auto' }}></Column>
        <Column field="comment" header="Comentario" style={{ width: 'auto' }}></Column>
        <Column field="location" header="Sucursal" style={{ width: 'auto' }}></Column>
      </DataTable>
      <CustomerDialogSelector showDialog={showCustomerDialog} setShowDialog={() => setShowCustomerDialog(false)} customers={[]}></CustomerDialogSelector>
      <EmployeeDialogSelector showDialog={showEmployeeDialog} setShowDialog={() => setShowEmployeeDialog(false)} customers={[]}></EmployeeDialogSelector>
    </>
  )
}

import React, { useRef, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dropdown } from 'primereact/dropdown'
import { CashBalance } from '../../@types'
import { FieldSelection } from '../pures/FieldSelection'
import { CustomerDialogSelector } from '../pures/CustomerDialogSelector'
import { EmployeeDialogSelector } from '../pures/EmployeeDialogSelector'
import { FieldDate } from '../pures/FieldDate'
import { FieldTime } from '../pures/FieldTime'
import { Calendar } from 'primereact/calendar'

export const TableCashBalance = ({ cashBalance }: { cashBalance: CashBalance[] }) => {
  const [globalFilter, setGlobalFilter] = useState(null)
  const [selectedProducts, setSelectedProducts] = useState(null)
  const [showEmployeeDialog, setShowEmployeeDialog] = useState(false)
  const [selectedDate, setSelectedDate] = useState()
  const dtRef = useRef(null)
  const schedule = ['MAÑANA', 'TARDE']
  const header = (
    <div className="table-header">
        <div className='table-subheader'>
          <h5 className="mx-0 my-1">Filtros</h5>
          <Calendar selectionMode="multiple" value={selectedDate} onChange={(e) => setSelectedDate(e.value)} showIcon></Calendar>
          <Dropdown value={schedule[0]} options={['ABIERTO', 'CERRADO']} placeholder="Estado"/>
          <FieldSelection title={'Empleado'} content={'-'} onClick={() => setShowEmployeeDialog(true)}></FieldSelection>
         </div>
    </div>
  )

  return (
    <>
      <DataTable ref={dtRef} value={cashBalance} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id" paginator rows={5}
        paginatorTemplate="PrevPageLink PageLinks NextPageLink"
        globalFilter={globalFilter} header={header} responsiveLayout="scroll">
        <Column field="date_open" header="Apertura" style={{ width: 'auto' }}></Column>
        <Column field="date_close" header="Cierre" style={{ width: 'auto' }}></Column>
        <Column field="system" header="Sistema" style={{ width: 'auto' }}></Column>
        <Column field="user" header="Usuario" style={{ width: 'auto' }}></Column>
        <Column field="diference" header="Diferencia" style={{ width: 'auto' }}></Column>
        <Column field="status" header="Estado" style={{ width: 'auto' }}></Column>
        <Column field="comment" header="Comentario" style={{ width: 'auto' }}></Column>
        <Column field="location" header="Sucursal" style={{ width: 'auto' }}></Column>
      </DataTable>
      <EmployeeDialogSelector showDialog={showEmployeeDialog} setShowDialog={() => setShowEmployeeDialog(false)} customers={[]}></EmployeeDialogSelector>
    </>
  )
}

import React, { useRef, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { OrderDetail, PriceListEnum } from '../../@types'
import { FieldSelection } from '../pures/FieldSelection'
import { CustomerDialogSelector } from '../pures/CustomerDialogSelector'
import { EmployeeDialogSelector } from '../pures/EmployeeDialogSelector'

export const TableOrderDetail = ({ detail }: { detail: OrderDetail[] }) => {
  const [globalFilter, setGlobalFilter] = useState(null)
  const [selectedProducts, setSelectedProducts] = useState(null)
  const [showCustomerDialog, setShowCustomerDialog] = useState(false)
  const [showEmployeeDialog, setShowEmployeeDialog] = useState(false)
  const dtRef = useRef(null)
  const orderLists = [{ name: 'LISTA 1', code: PriceListEnum.LISTA1 }, { name: 'LISTA 2', code: PriceListEnum.LISTA2 }, { name: 'LISTA 3', code: PriceListEnum.LISTA3 }, { name: 'LISTA 4', code: PriceListEnum.LISTA4 }]
  const header = (
    <div className="table-header">
        <div className='table-subheader'>
          <h5 className="mx-0 my-1">Datos</h5>
          <FieldSelection title={'Cliente'} content={'-'} onClick={() => setShowCustomerDialog(true)}></FieldSelection>
          <FieldSelection title={'Empleado'} content={'-'} onClick={() => setShowEmployeeDialog(true)}></FieldSelection>
          <Dropdown optionLabel="name" value={orderLists[0]} options={orderLists} onChange={(e) => console.log('asd')} placeholder="Select a City"/>
         </div>
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar" />
        </span>
    </div>
  )

  return (
    <>
      <DataTable ref={dtRef} value={detail} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id" paginator rows={5}
        paginatorTemplate="PrevPageLink PageLinks NextPageLink"
        globalFilter={globalFilter} header={header} responsiveLayout="scroll">
        <Column field="code" header="Codigo" style={{ width: 'auto' }}></Column>
        <Column field="name" header="Nombre" style={{ width: 'auto' }}></Column>
        <Column field="description" header="Descripción" style={{ width: 'auto' }}></Column>
        <Column field="size" header="Talle" style={{ width: 'auto' }}></Column>
        <Column field="color" header="Color" style={{ width: 'auto' }}></Column>
        <Column field="price" header="Precio" style={{ width: 'auto' }}></Column>
      </DataTable>
      <CustomerDialogSelector showDialog={showCustomerDialog} setShowDialog={() => setShowCustomerDialog(false)} customers={[]}></CustomerDialogSelector>
      <EmployeeDialogSelector showDialog={showEmployeeDialog} setShowDialog={() => setShowEmployeeDialog(false)} customers={[]}></EmployeeDialogSelector>
    </>
  )
}

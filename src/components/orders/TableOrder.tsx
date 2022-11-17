import React, { useRef, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { Order } from '../../@types'

export const TableOrders = ({ orders }: { orders: Order[] }) => {
  const [globalFilter, setGlobalFilter] = useState(null)
  const dtRef = useRef(null)
  const [selectedProducts, setSelectedProducts] = useState(null)
  const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">FILTROS</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar" />
            </span>
        </div>
  )

  return (
    <DataTable ref={dtRef} value={orders} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id" paginator rows={5}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} de {last} de {totalRecords} items"
        globalFilter={globalFilter} header={header} responsiveLayout="scroll">
        <Column selectionMode="multiple" headerStyle={{ width: 'auto' }} exportable={false}></Column>
        <Column field="date" header="Fecha" style={{ width: 'auto' }}></Column>
        <Column field="status" header="Estado" style={{ width: 'auto' }}></Column>
        <Column field="location" header="Punto" style={{ width: 'auto' }}></Column>
        <Column field="employee" header="Vendedor" style={{ width: 'auto' }}></Column>
        <Column field="customer" header="Customer" style={{ width: 'auto' }}></Column>
        <Column field="payment_method" header="Medio Pago" style={{ width: 'auto' }}></Column>
        <Column field="total" header="Total" style={{ width: 'auto' }}></Column>
    </DataTable>

  )
}

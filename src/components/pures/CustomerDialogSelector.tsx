import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Customer } from '../../@types'

export const CustomerDialogSelector = ({ showDialog, customers, setShowCustomerDialog }: { showDialog: boolean, customers: Customer[], setShowCustomerDialog: any }) => {
  const [selectedProduct1, setSelectedProduct1] = useState()
  return (
    <Dialog header="Clientes" visible={showDialog} onHide={setShowCustomerDialog} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }}>
        <DataTable value={customers} selectionMode="single" selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll">
            <Column field="dni" header="DNI"></Column>
            <Column field="name" header="Nombre"></Column>
            <Column field="surname" header="Apellido"></Column>
            <Column field="debt" header="Deuda"></Column>
        </DataTable>
    </Dialog>
  )
}

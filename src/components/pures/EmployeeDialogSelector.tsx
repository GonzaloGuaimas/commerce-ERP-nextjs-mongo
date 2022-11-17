import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Customer } from '../../@types'

export const EmployeeDialogSelector = ({ showDialog, customers, setShowDialog }: { showDialog: boolean, customers: Customer[], setShowDialog: any }) => {
  const [selectedProduct1, setSelectedProduct1] = useState()
  return (
    <Dialog header="Seleccionar Empleado" visible={showDialog} onHide={setShowDialog} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }}>
        <DataTable value={customers} selectionMode="single" selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll">
            <Column field="dni" header="DNI"></Column>
            <Column field="name" header="Nombre"></Column>
            <Column field="surname" header="Apellido"></Column>
        </DataTable>
    </Dialog>
  )
}

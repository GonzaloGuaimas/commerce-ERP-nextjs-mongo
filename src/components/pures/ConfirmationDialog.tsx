import React from 'react'
import { ConfirmDialog } from 'primereact/confirmdialog'

export const ConfirmationDialog = ({ visible, hide, message, title, accept, reject }: { visible: boolean, hide: any, message: String, title: String, accept: any, reject: any }) => {
  return (
    <ConfirmDialog visible={visible} onHide={() => hide(false)} message={message}
    acceptLabel={'Si'} rejectLabel={'No'}
    header={title} icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
  )
}

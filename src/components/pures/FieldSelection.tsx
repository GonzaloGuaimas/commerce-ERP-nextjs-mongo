import React from 'react'
import { Button } from 'primereact/button'

export const FieldSelection = ({ title, content, onClick }: { title: String, content: String, onClick: any }) => {
  return (
    <div className="field-text">
        <label>{title}</label>
        <h4>{content}</h4>
        <Button icon="pi pi-search" onClick={onClick} className="p-button-rounded p-button-text" aria-label="Submit" style={{ color: 'red' }} />
    </div>
  )
}

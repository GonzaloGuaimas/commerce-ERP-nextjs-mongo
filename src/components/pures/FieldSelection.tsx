import React from 'react'
import { Button } from 'primereact/button'

export const FieldSelection = ({ title, content }: { title: String, content: String }) => {
  return (
    <div className="field-text">
        <label>{title}</label>
        <h4>{content}</h4>
        <Button icon="pi pi-search" className="p-button-rounded p-button-text" aria-label="Submit" style={{ color: 'red' }} />
    </div>
  )
}

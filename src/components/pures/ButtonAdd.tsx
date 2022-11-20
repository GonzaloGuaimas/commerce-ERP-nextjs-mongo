import { Button } from 'primereact/button'
import React from 'react'

export const ButtonAdd = ({ title, onClick }: { title: string, onClick: any }) => {
  return (
    <Button onClick={() => onClick} label={title} icon={'pi pi-plus'} className="button-add" style={{ height: '10px', flex: '0.2' }}/>
  )
}

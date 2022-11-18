import React from 'react'
import { Calendar } from 'primereact/calendar'

export const FieldDate = ({ selectedDate, setSelectedDate }: { selectedDate: any, setSelectedDate: any }) => {
  return (
    <div className="field-text-2">
        <label htmlFor="date">Fecha</label>
        <Calendar id="date" value={selectedDate} onChange={(e) => setSelectedDate(e.value)} showIcon icon={'pi pi-calendar'} />
    </div>
  )
}

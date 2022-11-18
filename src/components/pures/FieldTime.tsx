import React from 'react'
import { Calendar } from 'primereact/calendar'

export const FieldTime = ({ selectedTime, setSelectedTime }: { selectedTime: any, setSelectedTime: any }) => {
  return (
    <div className="field-text-2">
        <label htmlFor="hour">Hora</label>
        <Calendar id="hour" value={selectedTime} onChange={(e) => setSelectedTime(e.value)} icon={'pi pi-clock'} showIcon timeOnly hourFormat="12" />
    </div>
  )
}

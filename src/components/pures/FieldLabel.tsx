import React from 'react'

export const FieldLabel = ({ title, content }: { title: string, content: string }) => {
  return (
    <div className='simple-label-between'>
        <h4>{title}</h4>
        <label>{content}</label>
    </div>
  )
}

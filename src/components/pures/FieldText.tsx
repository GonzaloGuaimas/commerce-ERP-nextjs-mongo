import React from 'react'

export const FieldText = ({ title, content }: { title: String, content: String }) => {
  return (
    <div className="field-text">
        <label>{title}</label>
        <h4>{content}</h4>
    </div>
  )
}

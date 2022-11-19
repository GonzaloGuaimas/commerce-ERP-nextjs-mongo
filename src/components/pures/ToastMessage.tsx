import React, { useEffect, useRef } from 'react'
import { Toast } from 'primereact/toast'

export const ToastMessage = ({ title, subTitle, type }: { title: String, subTitle: String, type: String }) => {
  const toast = useRef<any>(null)
  useEffect(() => {
    setTimeout(() => {
      toast?.current?.show({ severity: type, summary: title, detail: subTitle })
    }, 200)
  }, [])
  return (
    <Toast ref={toast} />
  )
}

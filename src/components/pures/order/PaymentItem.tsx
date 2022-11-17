import React from 'react'
import { Payment } from '../../../@types'

export const PaymentItem = ({ payment }: { payment: Payment }) => {
  return (
    <div className="item-product">
        <h4>{payment.name}</h4>
        <label>{payment.ammount}</label>
    </div>
  )
}

import React from 'react'
import { OrderDetail } from '../../../@types'

export const DetailItem = ({ product }: { product: OrderDetail }) => {
  return (
    <div className="item-product">
        <h4>{product.name}</h4>
        <label>{product.price}</label>
    </div>
  )
}

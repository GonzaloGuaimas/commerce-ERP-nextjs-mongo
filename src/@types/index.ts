
export interface Product {
  _id: String
  code: Number
  createdAt: Date
  name: String
  description: String
  category: number
  supplier: number
  station: number
  cost: number
  price: number
  list1: number
  size: number
  color: string
}

export interface Payment {
  _id: String
  code: Number
  createdAt: String
  name: String
  date: String
  ammount: number
}

export interface Customer {
  _id: String
  code: Number
  createdAt: String
  name: String
  surname: String
  dni: Number
  email: String
}

export interface CashFlow {
  _id: String
  code: Number
  date: String
  flow_type: String
  ammount: Number
  payment_method: String
  comment: String
  employee: number
  location: number
}

export interface CashBalance {
  _id: String
  code: Number
  date_open: String
  date_close: String
  status: number
  s_cash_init: number /* VER */
  s_cash: number
  s_debit: number
  s_credit: number
  s_transfer: number
  u_cash: number
  u_debit: number
  u_credit: number
  u_transfer: number
  comment: String
  employee: number
  location: number
}
export interface OrderDetail {
  _id: String
  code: Number
  name: String
  description: String
  cost: number
  price: number
  size: number
  color: number
}

export interface Order {
  _id: String
  code: Number
  createdAt: String
  date: String
  comment: String
  payment_method: String
  status: String
  total: number
  profit: number
  location: number
  employee: number
  customer: number
  detail: OrderDetail[]
  payments: Payment[]
}

/**
 * ENUMS
 */

export enum PriceListEnum {
  LISTA1 = 1,
  LISTA2 = 2,
  LISTA3 = 3,
  LISTA4 = 4
}

export enum FlowType {
  EGRESO = 'EGRESO',
  INGRESO = 'INGRESO'
}

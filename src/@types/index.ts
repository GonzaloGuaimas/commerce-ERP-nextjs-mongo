
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

export interface Payment {
  _id: String
  code: Number
  createdAt: String
  name: String
  date: String
  ammount: number
}

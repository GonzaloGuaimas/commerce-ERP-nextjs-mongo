import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  code: {
    type: Number,
    require: true,
    trim: true
  },
  name: {
    type: String,
    require: true,
    trim: true
  },
  description: {
    type: String,
    require: true,
    trim: true
  },
  category: {
    type: Number,
    require: true,
    trim: true
  },
  supplier: {
    type: Number,
    require: true,
    trim: true
  },
  station: {
    type: Number,
    require: true,
    trim: true
  },
  cost: {
    type: Number,
    require: true,
    trim: true
  },
  size: {
    type: String,
    require: true,
    trim: true
  },
  color: {
    type: String,
    require: true,
    trim: true
  }
})

export default mongoose.model('Product', productSchema)

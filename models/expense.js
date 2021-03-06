'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Expense', expenseSchema)

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const peopleSchema = new Schema({
  itemId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("people", peopleSchema)
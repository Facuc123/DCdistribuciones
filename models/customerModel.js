const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerModel = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  adress: {type: String },
  location: { type: String},
  phone: { type: Number },
})

module.exports = mongoose.model('customer', customerModel);
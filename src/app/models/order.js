const mongoose = require('../../data/mongoDB');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  value: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

import mongoose from 'mongoose';
import User from './users';
import Warehouse from './prompt';

const OrderSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User, // Reference to the User model
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User, // Reference to the User model
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Warehouse, // Reference to the Warehouse model
    },
    status: {
      type: String,
      required: true,
    },
    // shippingAddress: {
    //   type: String,
    // },
    
    rate: { type: Number},
    numberOfDays: { type: Number },
    isPaid: { type: Boolean },
    paidAt: { type: Date },
    isProcessing: { type: Boolean },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export default Order;

import { Schema, model, models } from 'mongoose';

const WarehouseSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  warehouseName: {
    type: String,
    required: [true, 'Warehouse name is required.'],
  },
  buildDate: {
    type: Date,
    required: [true, 'Build date is required.'],
  },
  currentStorageStatus: {
    type: String,
    enum: ['Full', 'Empty', 'Half-Occupied'],
    required: [true, 'Current storage status is required.'],
  },
  location: {
    type: String,
    required: [true, 'Location is required.'],
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  // Additional fields related to the warehouse
  storageCapacity: {
    type: Number,
    required: [true, 'Storage capacity is required.'],
  },
  availableStorage: {
    type: Number,
    required: [true, 'Available storage is required.'],
  },
  // You can add more fields like description, type of goods stored, etc.
  description: {
    type: String,
    required: [true, 'Description is required.'],
  },
  goodsType: {
    type: String, // Array of strings for multiple types of goods
    required: [true, 'Goods type is required.'],
  },
  image:{
    type :String ,
    required: [true, 'image type is required.'],
  }
});

const Warehouse = models.Warehouse || model('Warehouse', WarehouseSchema);

export default Warehouse;

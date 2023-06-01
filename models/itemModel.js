const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ItemSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      unique:true
        },
        quantity: {
            type:Number
        },
        price: {
            type:Number
        },
        title: {
            type: String
        },

    active: {
      type: Boolean,
      default: true,
    },

    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const ItemModel = mongoose.model('Item', ItemSchema)
module.exports= ItemModel
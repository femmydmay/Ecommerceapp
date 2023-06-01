const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },

    cart: [
        {
            itemId: mongoose.Schema.Types.ObjectId,
            quantity: Number,
            price: Number,
            title: String,
        }
    ],
    subTotal: {
        type:Number
    }
}, {
    timestamps:true
});

const CartModel = mongoose.model('Cart', cartSchema)
module.exports = CartModel
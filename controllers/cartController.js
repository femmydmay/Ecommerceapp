const ItemModel = require('../models/itemModel')
const UserModel = require('../models/userModel')
const CartModel = require('../models/cartModel')
const addToCart = async (req, res) => {
    try {
        // console.log(req.body)
        const { _id, user, title, price } = req.body
        if (!_id || !user || !title || !price) {
            return res.status(400).json({message:"missing fields"})
        }

        //check if item exists if exists increment otherwise you add new item
const existingUser = await UserModel.findOne({email:req.email})
        const item = await ItemModel.findOne({ product: _id })
        const existingCart =  await CartModel.findOne({user:existingUser._id})
        if (!existingCart) {
        
            const cart = [{ quantity: 1, price, title, itemId: _id }];
            const newCart = new CartModel({
                user: existingUser._id,
                cart,
                subTotal:price
                
            })
            // newItem.save()
            newCart.save()
            return res.status(200).json({message:'item added'})
        }
        const item_exist = existingCart.cart.find((item)=>item.title ===title)
      if (item_exist) {
       
            const q = item_exist.quantity + 1
     
       
     
            const updatCart = await CartModel.updateOne({ user: existingUser._id, "cart.itemId": _id }, { $set: { 'cart.$.quantity': q } })
            
                const usercart = await CartModel.findOne({
                  user: existingUser._id,
                });
                const updatedItem = existingCart.cart.find(
                  (item) => item.title === title
        );
        console.log(updatedItem);
         return res
           .status(200)
           .json({ message: "quantity increased", item: updatedItem });
        }
     
 const cart = [{ quantity: 1, price, title, itemId: _id }];

          const updatCart = await CartModel.updateOne(
            { user: existingUser._id, },
            { $push: { "cart": cart } }
        );
                const usercart = await CartModel.findOne({
                  user: existingUser._id,
                });
         const updatedItem = existingCart.cart.find(
           (item) => item.title === title
         );
        // const newquantity = item.quantity + 1
        // item.quantity = newquantity
        // item.save()
return res.status(200).json({ message: "quantity increased", item:updatedItem });

    } catch (error) {
        console.log(error)
    }
}

const removeFromCart = async (req, res) => {
    try {
         const { _id, user, title, price } = req.body;
         if (!_id || !user || !title || !price) {
           return res.status(400).json({ message: "missing fields" });
         }

         //check if item exists if exists increment otherwise you add new item
        const existingUser = await UserModel.findOne({ email: req.email });
        const existingCart = await CartModel.findOne({ user: existingUser._id });
        if (!existingCart) {
        return res.status(400).json({message:'empty cart'})
        }
          const item_exist = existingCart.cart.find(
            (item) => item.title === title
        );
    
        if (!item_exist) {
            return res.status(400).json({message:"item does not exist"})
        }
        if (item_exist.quantity <= 1) {
                 const updatCart = await CartModel.updateOne(
                   { user: existingUser._id },
                   { $pull: {"cart": {"itemId":_id} } }
            );
            return res.status(200).json({message: "item removed"})
        }
              const q = item_exist.quantity - 1;

              const updatCart = await CartModel.updateOne(
                { user: existingUser._id, "cart.itemId": _id },
                { $set: { "cart.$.quantity": q } }
        );
 
          const usercart = await CartModel.findOne({
            user: existingUser._id,
          });
          const updatedItem = existingCart.cart.find(
            (item) => item.title === title
          );
        return res.status(200).json({ message: "quantity decreased", item:updatedItem });
    } catch (error) {
        console.log(error);
    }
}

const getCart = async (req, res) => {
  try {
    console.log('dkdkddkk');
    console.log(req.email);
        const existingUser = await UserModel.findOne({ email: req.email });
    
                const existingCart = await CartModel.findOne({
                  user: existingUser._id,
                });
        if (!existingCart) {
            return res.status(400).json({ message: 'empty cart' })
        }
      console.log(existingCart);
        return res.status(200).json(existingCart)
    } catch (error) {
        console.log(error);
    }
} 

const getCartItem = async (req, res) => {
    try {
        const { title } = req.params;
        const existingUser = await UserModel.findOne({ email: req.email });
        
        const existingCart = await CartModel.findOne({
            user: existingUser._id,
        });
    

                if (!existingCart) {
                  return res.status(400).json({ message: "empty cart" });
        }
        
  
                const item_exist = existingCart.cart.find(
                  (item) => item.title === title
        );
        console.log(item_exist);
          if (!item_exist) {
            return res.status(400).json({ message: "item does not exist" });
        }
        return res.status(200).json({item_exist})
    } catch (error) {
        
    }
}
const deleteCartItem = async (req, res) => {
    try {
        
        const  { _id  } = req.body
         const existingUser = await UserModel.findOne({ email: req.email });
         const existingCart = await CartModel.findOne({
           user: existingUser._id,
         });
         
      if (!existingCart) {
        return res.status(400).json({ message: "empty cart" });
      }
      const item_exist = existingCart.cart.find((item) => item.title === title);

      if (!item_exist) {
        return res.status(400).json({ message: "item does not exist" });
        }
                 const updatCart = await CartModel.updateOne(
                   { user: existingUser._id },
                   { $pull: {"cart": {"itemId":_id} } }
            );
            return res.status(200).json({message: "item deleted"})
        

        
    } catch (error) {
        
    }
}

module.exports = {addToCart, removeFromCart, getCart, deleteCartItem, getCartItem}
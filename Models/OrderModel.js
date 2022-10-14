const mongoose = require("mongoose")
const OrderModelSchema = new mongoose.Schema({


  hairType:String,
  hairStructure:String,
  treatHair:String,
  colorHair:String,
  bestColor:String,
  hairGoal:[

  ],
  

  
  fragrance:String,
  fragrance_strength:String,
  product:{
  product_name:String,
  product_price:String
  },
  delivery_details:{
  name:String,
  street:String,
  city:String,
  state:String,
  postcode:String,
  country:String,
  phone_number:String,
  email:String
  },
  payment:false



});

module.exports = mongoose.model('OrderModel', OrderModelSchema);
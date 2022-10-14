const express = require ("express")
const productCtrl=require('./../Controller/product')
const paymentCtrl = require('./../Controller/Payment')

const router=express.Router()

// router.
router.post('/store',productCtrl.product_store)

// OrderModel.post("/product_store",async(req,res)=>{
//   const data = req.body.data;
//   data.payment = false;
//   console.log(data)
//   try {
//     let order = await OrderModel.create({
//       ...data,payment:false

//     })
//     res.json({message:"Stored Successfully"})
    
//   } catch (error) {
//     res.send(error);
    
//   }
// })
router.post('/create_payment',paymentCtrl.payment)

module.exports=router
const OrderModel = require("../Models/OrderModel")
const product_store=async(req,res)=>{
 
    let data = req.body.data;
    data={...data,payment:false}
    // data.payment=false
    console.log(data)

    try {
      let order = await OrderModel.create({...data})
      console.log(order)
      res.json({message:"Stored Successfully"})
      
    } catch (error) {
      res.send(error);
      
    }
  }


module.exports={
  product_store
}
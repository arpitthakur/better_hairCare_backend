const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router=require('./Routes/productRoute')
const cors = require("cors");
// const ProductModel = require("./Models/OrderModel")

app.use(express.json());
app.use(cors());
app.use('/product',router)

const PORT = 9000;
// app.listen(port, () => {
//   console.log(` app listening on port ${port}`);
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));


mongoose
  .connect(
    "mongodb+srv://arpitThakur4931:Bullshit7@cluster0.l9btlcq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected"))
  .catch(() => console.log("error"));
require("dotenv").config()
const STRIPE_SECRET_KEY = process.env.SECRET_KEY
const stripe = require("stripe")(
  STRIPE_SECRET_KEY
);

// get the product details
const payment = async (req, res) => {
  // const card = req.body.card;
  // const email = req.body.email
  // try{

  //   // const customer = await stripe.customers.create({email:"test@gmail.com"})
  //   // res.send( customer)

  //   let data = await stripe.charges.create(
  //     {
  //       amount: 1234,
  //     amount: 2000,
  //     currency: "inr",
  //     source:card.id,
  //   }
  //   // ,    {stripe_account: "acct_1LsLqrSHBiOR4sbD"}
  //   );
  //  res.send(data)
   
  // }catch(e){
  //   // res.send(data)
  //   console.log(e)
  // }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });

};
module.exports = {
  payment,
};

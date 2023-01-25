const express = require('express');
const order = require('../models/order')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('Enter Your stripe SeceretKey ')

router.post("/order", async (req, res) => {

    const { token,totalamount,currentUser,cartItem} = req.body;

    try{
         const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
         });


         const  payment = await stripe.paymentIntents.create({
            amount:totalamount*100,
            currency:'inr',
            customer:customer.id,
            receipt_email:token.email,
         },
         {
            idempotencyKey:uuidv4()
         });

         if(payment){

            const neworder = new order({

               name:currentUser.username,
               email:currentUser.email,
               userid:currentUser._id,
               orderItems:cartItem,
               orderAmount:totalamount,
               shippingAddress:{
                  street: token.card.address_line1,
                  city: token.card.address_city,
                  country: token.card.address_country,
                  pincode:token.card.address_zip
               },

               transactionId: payment.id

            })

            neworder.save()

            res.status(200).json({sucess:true,message:"Payment Successfully Done"} );
         }

         else{
            res.status(400).json({sucess:false,message:"Payment Failed"} );
         }
    }
    catch(err){
        res.status(500).json({sucess:false,message:err.message} );
    }
   

});

router.get("/getorderdetails", async (req, res) => {

   try {

       const or = await order.find({});
       res.status(200).json( or );

   } catch (e) {
       res.status(500).send({ sucess: false, message: e.message });
   }

});


module.exports = router;
const express = require('express');
const pizza = require('../models/pizza')
const order = require('../models/order')
const user = require('../models/user')
const router = express.Router();

router.get("/admin/getpizzas", async (req, res) => {

    try {

        const p = await pizza.find({});
        res.status(200).json(p);
    } catch (e) {
        res.status(500).json({ sucess: false, message: e.message });
    }

});

router.post("/admin/addpizza", async (req, res) => {

    try {

        const Pizza = req.body;

        const newpizza = new pizza({
            name: Pizza.name,
            image: Pizza.imageurl,
            category: Pizza.category,
            varient: ['small', 'medium', 'large'],
            prices: [Pizza.prices]
        })

        await newpizza.save()

        res.status(201).send('Pizza Added Successfully')

    } catch (e) {
        res.status(500).json({ sucess: false, message: e.message });
    }

});

router.get("/admin/pizzabyid/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const p = await pizza.findById(id)

        res.status(201).json({ sucess: true, p })

    } catch (e) {
        res.status(500).json({ sucess: false, message: e.message });
    }

});

router.put("/admin/editpizzas/:id", async (req, res) => {

    try {

        const editedpizza = req.body;

        const Pizza = await pizza.findByIdAndUpdate({ _id: req.params.id },
            {
                name: editedpizza.name,
                image: editedpizza.imageurl,
                category: editedpizza.category,
                prices: [editedpizza.prices]
            },
            {
                new: true
            }
        )

        res.status(201).json({ sucess: true, message: 'Pizza Updated Successfully' })

    } catch (e) {
        res.status(500).json({ sucess: false, message: e.message });
    }

});

router.delete("/admin/deletepizzas/:id", async (req, res) => {

    try {


        await pizza.findByIdAndDelete({ _id: req.params.id })

        res.status(201).json({ sucess: true, message: 'Deleted pizza successfully' })

    } catch (e) {
        res.status(500).json({ sucess: false, message: e.message });
    }

});

router.get("/admin/allorderdetails", async (req, res) => {

    try {
        const allorder = await order.find({});
        res.status(200).json({sucess:true, allorder});
    } catch (e) {
        res.status(500).json({ sucess: false, message: e.message });
    }

});

router.post("/admin/delivered/:id", async (req, res) => {

    try {
        const orderstatus = await order.findById({ _id: req.params.id })
        orderstatus.isDelivered = true

         await orderstatus.save()

        res.status(201).json({ sucess: true, message: 'Ordered Delivered Sucessfully' })

    } catch (e) {
        res.status(500).json({ sucess: false, message: e.message });
    }

});

router.get("/admin/allusers", async (req, res) => {

    try {
        const users = await user.find({})

        res.status(201).json({ sucess: true, users})

    } catch (e) {
        res.status(500).json({ sucess: false, message: e.message });
    }

});

router.delete("/admin/allusers/:id", async (req, res) => {

    try {
        
         await user.findByIdAndDelete({_id: req.params.id})

        res.status(201).json({ sucess: true, message: "User deleted successfully"})

    } catch (e) {
        res.status(500).json({ sucess: false, message: e.message });
    }

});

router.post("/admin/statususers/:id", async (req, res) => {

    try {
        
         const User = await user.findById({ _id: req.params.id })

         if(User.isAdmin){
            User.isAdmin = !User.isAdmin 
         }else{
            User.isAdmin = !User.isAdmin 
         }

         User.save()

        res.status(201).json({ sucess: true, message: "User Status Changed successfully"})

    } catch (e) {
        res.status(500).json({ sucess: false, message: e.message });
    }

});


module.exports = router;
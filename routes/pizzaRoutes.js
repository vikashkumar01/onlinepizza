const express = require('express');
const pizza = require('../models/pizza')
const router = express.Router();

router.get("/getpizzas", async (req, res) => {

    try {

        const p = await pizza.find({});
        res.status(200).json( p );
    } catch (e) {
        res.status(500).send({ sucess: false, message: e.message });
    }

});


module.exports = router;
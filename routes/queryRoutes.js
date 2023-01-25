const express = require('express');
const query = require('../models/query');
const router = express.Router();

router.post("/contact", async (req, res) => {

    try {
       
        const data = req.body

        const Query = new query({
            name: data.name,
            email: data.email,
            message: data.message
        })

         await Query.save()

        res.status(200).send(" Sent Message successfully ")
        
    } catch (e) {
        res.status(500).send({ sucess: false, message: e.message });
    }

});

module.exports = router;


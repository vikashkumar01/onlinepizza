const mongoose = require('mongoose');

const querySchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
},{
    timestamp:true,
});

const queryModel = mongoose.model('query',querySchema)

module.exports = queryModel;
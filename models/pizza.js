const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({

    name: {type: 'string', require},
    varients: [],
    prices: [],
    category: {type: 'string', require},
    image: {type: 'string', require},
    description: {type: 'string', require}

    
},{
    timestamp:true,
});

const pizzaModel = mongoose.model('pizzas',pizzaSchema)

module.exports = pizzaModel;
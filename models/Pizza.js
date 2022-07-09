// require the mongoose library
const { Schema, model } = require('mongoose');

// create the schema targeting:
    // Name of pizza
    // name of user that created the pizza
    // timestamp of when pizza was created
    // timestamp of any updates to the pizza
    // pizza suggested size
    // pizza toppings
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;
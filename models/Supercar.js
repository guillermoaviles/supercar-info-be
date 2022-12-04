const mongoose = require('../db/connection');
const Schema = mongoose.Schema;


// Supercar Schema Model
const supercarSchema = new Schema(
    {
        make: String,
        model: String,
        year: String,
        image: String,
        engine: String,
        transmission: String,
        price: String,
        mileage: String,
        description: String
    }
);

const Supercar = mongoose.model('Supercar', supercarSchema);

module.exports = Supercar;


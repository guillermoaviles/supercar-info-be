const mongoose = require('../db/connection');
const Schema = mongoose.Schema;


// Supercar Schema Model
const supercarSchema = new Schema(
    {
        make: String,
        model: String,
        year: Number,
        image: String,
        engine: String,
        transmission: String,
        price: Number,
        mileage: Number,
        description: String
    }
);

const Supercar = mongoose.model('Supercar', supercarSchema);

module.exports = Supercar;


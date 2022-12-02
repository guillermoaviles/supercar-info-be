const mongoose = require('mongoose');
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
        price: Number
    }
);

const Supercar = mongoose.model('Supercar', supercarSchema);

module.exports = Supercar;


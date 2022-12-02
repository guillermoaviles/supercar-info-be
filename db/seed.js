const mongoose = require('./connection');

const Supercar = require('../models/Supercar');
const supercarSeeds = require('./cars.json');

Supercar.deleteMany({}).then(() => {
    Supercar.create(supercarSeeds).then(supercars => {
        console.log(supercars)
    })
})


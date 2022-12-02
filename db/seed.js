const mongoose = require('./connection');

const Supercar = require('../models/Supercar');
const supercarSeeds = require('./seed.json');

Supercar.deleteMany({}).then(() => {
    Supercar.create(supercarSeeds).then(supercars => {
        console.log(supercars)
    })
    })
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});

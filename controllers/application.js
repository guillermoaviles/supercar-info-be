const express = require('express');
const router = express.Router();

const Supercar = require('../models/Supercar')


// Get all cars in the inventory
router.get('/', async (req, res, next) => {
    try {
      const supercars = await Supercar.find({}) 
      res.json(supercars);
    } catch (err) {
          next(err);
    }
});

// Get all cars by make
router.get('/make/:make', async (req, res, next) => {
    try {
      const supercars = await Supercar.find({make: req.params.make})
      res.json(supercars);
    } catch (err) {
          next(err);
    }
});

// Get all cars by model
router.get('/model/:model', async (req, res, next) => {
    try {
      const supercars = await Supercar.find({model: req.params.model})
      res.json(supercars);
    } catch (err) {
          next(err);
    }
});

// Get all cars by year
router.get('/year/:year', async (req, res, next) => {
    try {
      const supercars = await Supercar.find({year: { $gte: req.params.year}})
      res.json(supercars);
    } catch (err) {
          next(err);
    }
});

// Get all cars by model
router.get('/model/:model/image', async (req, res, next) => {
    try {
      const supercars = await Supercar.find({model: req.params.model})
      res.json(supercars.image);
    } catch (err) {
          next(err);
    }
});

// Get all cars by engine
router.get('/engine/:engine', async (req, res, next) => {
    try {
      const supercar = await Supercar.find({engine: req.params.engine})
      res.json(supercar);
    } catch (err) {
          next(err);
    }
});

// Get all cars by transmission
router.get('/transmission/:transmission', async (req, res, next) => {
    try {
      const supercar = await Supercar.find({transmission: req.params.transmission})
      res.json(supercar);
    } catch (err) {
          next(err);
    }
});

// Get all cars by price
router.get('/price/:price', async (req, res, next) => {
    try {
      const supercar = await Supercar.find({price: {$lte: req.params.price}})
      res.json(supercar);
    } catch (err) {
          next(err);
    }
});

// Get all cars by mileage
router.get('/mileage/:mileage', async (req, res, next) => {
    try {
      const supercar = await Supercar.find({mileage: {$lte: req.params.mileage}})
      res.json(supercar);
    } catch (err) {
          next(err);
    }
});

// Get car descriptions
router.get('/model/:model/description', async (req, res, next) => {
    try {
      const supercar = await Supercar.find({model: req.params.model})
      res.json(supercar.description);
    } catch (err) {
          next(err);
    }
});

module.exports = router

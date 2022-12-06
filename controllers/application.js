const express = require('express');
const router = express.Router();

const Supercar = require('../models/Supercar')



router.get('/', async (req, res, next) => {
    try {
      // console.log('try')
      const supercars = await Supercar.find({}) 
      res.json(supercars);
      // res.send('hello')
    } catch (err) {
          next(err);
          console.log('in controller func')
    }
});


router.get('/make/:make', async (req, res, next) => {
    try {
      const supercars = await Supercar.find({make: req.params.make})
      res.json(supercars);
      console.log('make')
    } catch (err) {
          next(err);
    }
});


router.get('/model/:model', async (req, res, next) => {
    try {
      const supercars = await Supercar.find({model: req.params.model})
      res.json(supercars);
      console.log('model')
    } catch (err) {
          next(err);
    }
});


router.get('/year/:year', async (req, res, next) => {
    try {
      const supercars = await Supercar.find({year: { $gte: req.params.year}})
      res.json(supercars);
      console.log('year')
    } catch (err) {
          next(err);
    }
});


router.get('/model/:model/image', async (req, res, next) => {
    try {
      const supercars = await Supercar.find({model: req.params.model})
      res.json(supercars.image);
      console.log('model')
    } catch (err) {
          next(err);
    }
});

router.get('/engine/:engine', async (req, res, next) => {
    try {
      const supercar = await Supercar.find({engine: req.params.engine})
      res.json(supercar);
      console.log('engine')
    } catch (err) {
          next(err);
    }
});


router.get('/transmission/:transmission', async (req, res, next) => {
    try {
      const supercar = await Supercar.find({transmission: req.params.transmission})
      res.json(supercar);
      console.log('transmission')
    } catch (err) {
          next(err);
    }
});


router.get('/price/:price', async (req, res, next) => {
    try {
      const supercar = await Supercar.find({price: {$lte: req.params.price}})
      res.json(supercar);
      console.log('price')
    } catch (err) {
          next(err);
    }
});


router.get('/mileage/:mileage', async (req, res, next) => {
    try {
      const supercar = await Supercar.find({mileage: {$lte: req.params.mileage}})
      res.json(supercar);
      console.log('price')
    } catch (err) {
          next(err);
    }
});


router.get('/model/:model/description', async (req, res, next) => {
    try {
      const supercar = await Supercar.find({model: req.params.model})
      res.json(supercar.description);
      console.log('description')
    } catch (err) {
          next(err);
    }
});


// router.post('/', async (req, res, next) => {
//     console.log(req.body)
//       try {
//           const newAuthor = await Author.create(req.body);
//           if (req.body.title && req.body.yearPublished) {
//             const newCookbook = await Cookbook.create(req.body)
//             newAuthor.cookbooks.push(newCookbook)
//             await newAuthor.save()
//           } else {
//             await newAuthor.save()
//           }
//           res.status(201).json(newAuthor);
//       } catch (err) {
//           next(err);
//       }
//   });


// router.put('/:name/addBook', async (req, res, next) => {
//     console.log(req.params.author)
//       try {
//         const newCookbook = await Cookbook.create(req.body);
//         const nameArr = req.params.name.split(' ')
//         const authorUpdate = await Author.findOneAndUpdate(
//             {
//                 firstName: nameArr[0],
//                 lastName: nameArr[1]
//             },
//             { $push: { cookbooks: newCookbook._id } },
//             {
//                 new: true
//             }
//         );
//         if (authorUpdate) {
//             res.json(authorUpdate);
//         } else {
//             res.sendStatus(404);
//         }
//       } catch (err) {
//           next(err);
//       }
//   });
  

// router.delete('/:name', async (req, res, next) => {
// 	try {
//         const nameArr = req.params.name.split(' ')
// 		const authorToDelete = await Author.findOneAndDelete({
//             firstName: nameArr[0],
//             lastName: nameArr[1]
//         });
//         console.log(authorToDelete);
//         if (authorToDelete) {
//             res.sendStatus(204);
//         } else {
//             res.sendStatus(404);
//         }
// 	} catch (err) {
// 		next(err);
// 	}
// });

module.exports = router

const express = require('express');
const Celebrity = require('../models/celebrity');
// const Review = require('../models/review');

const router = express.Router();

/* GET products listing. */
router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      res.render('celebrities/celebrities', { celebrities });
    })
    .catch(next);
});

// router.get('/new', (req, res, next) => {
//   res.render('products/new');
// });

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  // const name = req.body.name;
  // const price = req.body.price;
  // const imageURL = req.body.imageURL;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      console.log('got it');
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log('catching the error');
      next(err);
    });
});

// router.get('/:id', (req, res, next) => {
//   const { id } = req.params;
//   Product.findById(id)
//     .populate('reviews')
//     .then((product) => {
//       res.render('products/detail', { product });
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

// router.post('/:id/delete', (req, res, next) => {
//   const { id } = req.params;
//   Product.findByIdAndDelete(id)
//     .then((product) => {
//       res.redirect('/products');
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

// router.post('/:id/review', (req, res, next) => {
//   const { id } = req.params; // product id
//   const { content, stars, author } = req.body; // review object

//   const review = new Review({
//     content,
//     author,
//     stars,
//   });
//   review.save()
//     .then(() => Product.findByIdAndUpdate(id, { $push: { reviews: review.id } }))
//     .then(() => {
//       res.redirect(`/products/${id}`);
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

module.exports = router;

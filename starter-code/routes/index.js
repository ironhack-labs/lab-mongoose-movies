
const express = require('express');
const router  = express.Router();
const CelebrityModel = require("./../model/celebrity");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  CelebrityModel.find().then(dbRes => {
    res.render('celebrities/index', {celebrities: dbRes});
  }).catch(dbErr => {
    console.log(dbErr);
  })
});

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new_celebrity');
});
// if this function is above the other function where we get the _id
// ERROR: Cast to ObjectId failed for value "new" at path "_id" for model "Celebrity"
// is occurring because the server is checking for the _id of the Celebrity
// neccessary to put the function above the the /celebrities/:id function to get
// the result

router.get('/celebrities/:id', (req, res, next) => {
  CelebrityModel.findById(req.params.id).then(dbRes => {
    console.log('res', dbRes);
    res.render('celebrities/one_celebrity', {one_celebrity: dbRes});
  }).catch(dbErr => console.log(dbErr));
});




module.exports = router;

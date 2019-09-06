const express = require('express');
const router  = express.Router();

const Celebrity = require('./../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET list of celebrities */
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebs) => {
      data = { celebs };
      res.render('celebrities', data);
    })
    .catch((err) => {
      console.log("Error retrieving all celebrities:", err)
    })
});

/* GET add-celebrity form */
router.get('/celebrities/new', (req, res, next) => {
  res.render('addCeleb');
})

/* GET specific celebrity */
router.get('/celebrities/:celebId', (req, res, next) => {
  const celebId = req.params.celebId;
  Celebrity.findById(celebId)
    .then(celeb => {
      res.render('celebrity', { celeb })
    })
    .catch(e => {
      console.log("Failed to find a specific celebrity", e);
    })
});

/* GET edit celebrity form */
router.get('/celebrities/:celebId/edit', (req, res, next) => {
  const celebId = req.params.celebId;
  Celebrity.findById(celebId)
    .then(celeb => {
      res.render('editor', { celeb });
    })
    .catch(e => {
      console.log("Failed to retrieve celebrity editor page", e);
    })
});

/* POST to delete celebrity */
router.post('/celebrities/:celebId/delete', (req, res, next) => {
  const celebId = req.params.celebId;
  Celebrity.findByIdAndDelete(celebId)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(e => {
      console.log("Error when deleting celebrity", e)
    })
});

/* POST output from edit-celebrity form */
router.post('/celebrities/:celebId', (req, res, next) => {
  const celebId = req.params.celebId;
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchphrase = req.body.catchphrase;
  Celebrity.findByIdAndUpdate(celebId, {name, occupation, catchphrase})
    .then(() => {
      res.redirect('/celebrities/'+celebId);
    })
    .catch(e => {
      console.log("Error editing celebrity", e);
    })
});

/* POST output from add-celebrity form */
router.post('/celebrities', (req, res, next) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchphrase = req.body.catchphrase;
  Celebrity.create({ name, occupation, catchphrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(e => {
      console.log("Error creating new celebrity", e)
    })
});

module.exports = router;

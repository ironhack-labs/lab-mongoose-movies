const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req, res, next) => {
  const celebrities = await Celebrity.find()
  res.render('celeb', {celebrities});
console.log('celebrities')
  if(!celebrities){
      console.log("Existe un error") 
}
});

router.get('/celebrities/:id', async (req, res, next) => {
  const {celebId}= req.params
  const celebrity = await Celebrity.findById(celebId)
  res.render('show', celebrity);
  if(!celebrities){
      console.log("Existe un error") 
}
});


app.get("/artist/:artistId", async (req, res) => {
  const { artistId } = req.params
  const artist = await Artist.findById(artistId).populate("albums")
  console.log(artist)
  res.render("artist/detail", artist)
})

app.get("/artist/edit/:artistId", async (req, res) => {
  const artist = await Artist.findById(req.params.artistId)
  res.render("artist/update", artist)
})


/*
app.get("/", async (req, res) => {
  const artists = await Artist.find()
  res.render("index", { artists })
})
*/

module.exports = router;

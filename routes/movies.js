// ITERATION 8: adding new movies //not working

router.get('/movies/new', (req, res) => {
    res.render('movies/new') //hbs
  });
  
  router.post('/celebrities', (req, res) => {
    Celebrity.create({ name: req.body.name, occupation: req.body.occupattion, catchPhrase: req.body.catchPhrase }).then(() => {
      res.redirect('celebrities')
    })
  })
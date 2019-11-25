const Celebrity = require('../models/Celebrity.js')

// exports.signupGet = (req, res) => {
//   res.render('')
// }

exports.showCelebs = async (req, res) => {
  const celebList = await Celebrity.find()
  res.render('celebrities/index', {
    celebList
  })
}

exports.showOneCeleb = async (req, res) => {
  const {
    id
  } = req.params
  const celebs = await Celebrity.findById(id, err => console.log(err))
  res.render('celebrities/show', {
    celebs
  })
}

exports.addNew = (req, res, next) => {
  res.render("celebrities/new")
}


exports.postNew = (req, res, next) => {
  Celebrity.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    })
    .then(() => res.redirect("/celebrities/index"))
    .catch(() => {
      next();
      // throw new Error("cannnot add this bae");
    })
}
const Celebrity = require('../models/Celebrity');
exports.listCelebrities = async (req, res) => {
  const celebs = await Celebrity.find();
  res.render('celebrities', {celebs});
};

exports.showNewCelebrityform = (req, res) => {
  res.render('celebrities/new');
};

exports.addCelebrity = async (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  await Celebrity.insertMany({ name, occupation, catchPhrase });
  res.redirect('/celebrities');
};

exports.showCelebrity = async (req, res) => {
  const celeb = await Celebrity.findById(req.params.id);
  res.render('celebrities/show', celeb);
};

exports.deleteCelebrity = async (req, res) => {
 
  await Celebrity.findByIdAndRemove(req.params.id)
  res.redirect('/celebrities')
}

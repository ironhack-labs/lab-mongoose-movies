const Celeb = require("../models/Celebrity");

// R en CRUD
exports.getAllCelebs = async (req, res) => {
  const celebs = await Celeb.find();
  res.render("celebrities", { celebs });
};

exports.celebDetail = async (req, res) => {
  const celebs = await Celeb.findById(req.params.celebId);
  res.render("celebrity", { celebs });
};
// C en CRUD
exports.createCelebView = (req, res) => {
  const ocupacion=['Actor','Singer','Comedian','Unknown']
  res.render("createCeleb",{ocupacion});
};
exports.createCeleb = async (req, res) => {
  const { name, occupation,catchPhrase } = req.body;
  await Celeb.create({
    name,
    occupation,
    catchPhrase
  });
  res.redirect("/");
};

// U en CRUD
exports.updateCelebView = async (req, res) => {
  const celebs = await Celeb.findById(req.params.celebId);
  celebs.ocupacion=[{
    name:'Actor',
    select:false},
    {
    name:'Singer',
    select:false},
    {name:'Comedian',
    select:false},
    {name:'Unknown',
    select:false}]
    celebs.ocupacion.forEach(element => {
      if (element.name===celebs.occupation) {element.select=true}
    });
    console.log(celebs.ocupacion)
  res.render("updateCeleb", celebs);
};

exports.updateCeleb = async (req, res) => {
  const {  name, occupation,catchPhrase } = req.body;

  await Celeb.findByIdAndUpdate(req.params.celebId, {  name, occupation,catchPhrase });

  res.redirect("/");
};

// D en CRUD
exports.deleteCeleb = async (req, res) => {
  await Celeb.findByIdAndDelete(req.params.celebId);
  res.redirect("/");
};
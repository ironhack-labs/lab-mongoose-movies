const Celebrity = require("../models/Celebrity");
const { findById } = require("../models/Celebrity");

exports.getAllCelebs = async (req, res) => {
  const data = await Celebrity.find();
  res.render("celebrities/index", { data });
};

exports.getSingleCeleb = async (req, res) => {
  const { celebId } = req.params;
  const celeb = await Celebrity.findById(celebId);
  console.log(`celeb id is`, celebId);
  res.render("celebrities/show", celeb);
};

exports.showCreatePage = (req, res) => {
  res.render("celebrities/new");
};

exports.createCeleb = async (req, res) => {
  await Celebrity.create(req.body);
  res.redirect("/celebrities");
};

exports.deteteCeleb = async (req, res) => {
  const { id } = req.params;
  await Celebrity.findByIdAndDelete(id);
  res.redirect("/celebrities");
};

exports.showUpdateCeleb = async (req, res) => {
  const { thisId } = req.params;
  celeb = await Celebrity.findById(thisId);
  res.render("celebrities/edit", celeb);
};

exports.updateCeleb = async (req, res) => {
  const { thisId } = req.params;

  await Celebrity.findByIdAndUpdate(thisId, req.body, { new: true });
  res.redirect("/celebrities");
};

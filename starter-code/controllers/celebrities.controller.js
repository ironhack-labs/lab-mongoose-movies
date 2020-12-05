const Celebrity = require("../models/Celebrity.model");

const getCelebrities = async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities });
  } catch (err) {
    next();
    return err;
  }
};

const getCelebrity = async (req, res) => {
  try {
    const { CelebrityId } = req.params;
    const celebrity = await Celebrity.findById(CelebrityId);
    console.log(celebrity)
    res.render("celebrities/show", { celebrity });
  } catch (err) {
    next();
    return err;
  }
};

const createCelebrity = async (req, res) => {
  try {
    await Celebrity.create(req.body);
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities });
  } catch (err) {
    next();
    return err;
  }
};

const deleteCelebrity = async (req, res) => {
  try {
    const { CelebrityId} = req.params;
    console.log(CelebrityId);
    const removedCelebrity = await Celebrity.findByIdAndRemove(CelebrityId);
    console.log("removed celebrity", removedCelebrity);
    res.redirect("/celebrities");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getCelebrities,
  getCelebrity,
  createCelebrity,
  deleteCelebrity
};
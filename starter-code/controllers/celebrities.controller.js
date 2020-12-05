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

module.exports = {
  getCelebrities,
  getCelebrity,
  createCelebrity,
};
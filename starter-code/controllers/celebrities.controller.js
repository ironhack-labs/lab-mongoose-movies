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

module.exports = {
  getCelebrities,
};
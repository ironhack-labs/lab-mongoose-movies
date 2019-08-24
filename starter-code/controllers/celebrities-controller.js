const Celebrity = require('../models/Celebrity'); // Import of the model Recipe from './models/Recipe'

const index = async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('celebrities/index', { celebrities });
  } catch (error) {
    throw new Error(error);
  }
};
const detail = async (req, res) => {
  try {
    const detCelebrity = await Celebrity.findById(req.params.id);
    console.log(detCelebrity);
    res.render('celebrities/detail', detCelebrity);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  index,
  detail,
};

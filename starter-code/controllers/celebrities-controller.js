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
    res.render('celebrities/detail', detCelebrity);
  } catch (error) {
    throw new Error(error);
  }
};

const newCelebrityForm = async (req, res) => {
  try {
    res.render('celebrities/new');
  } catch (error) {
    throw new Error(error);
  }
};

const createCelebrity = (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      res.redirect('/celebrities/new');
    });
};

const deleteCelebrity = async (req, res) => {
  const { id } = req.body;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      res.redirect('/celebrities');
    });
};

const formEditCelebrity = async (req, res) => {
  const { id } = req.params;
  try {
    const celebrityEdit = await Celebrity.findById(id);
    console.log(celebrityEdit);
    res.render('celebrities/edit', celebrityEdit);
  } catch (error) {
    res.redirect(`/celebrities/${id}`);
  }
};

const editCelebrity = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    occupation,
    catchPhrase,
  } = req.body;
  try {
    await Celebrity.findByIdAndUpdate({ _id: id }, { name, occupation, catchPhrase });
    res.redirect(`/celebrities/${id}`);
  } catch (error) {
    res.redirect(`/celebrities/${id}`);
  }
};

module.exports = {
  index,
  detail,
  newCelebrityForm,
  createCelebrity,
  deleteCelebrity,
  editCelebrity,
  formEditCelebrity,
};

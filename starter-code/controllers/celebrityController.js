const Celebrity = require("../models/Celebrities");

const findCelebrities = async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/index", { celebrities });
  } catch (error) {
    console.error(error);
    next();
  }
};

const newGetCelebrity = (req, res) => {
  res.render("celebrities/new");
};

const newPostCelebrity = (req, res) => {
  const newCelebrity = new Celebrity(req.body);
  newCelebrity
    .save()
    .then(() => {
      res.redirect("celebrities");
    })
    .catch(error => {
      res.render("celebrities/new");
      console.error(error);
    });
};

const findCelebrity = async (req, res, next) => {
  const { id } = req.params;
  try {
    const infoCelebrities = await Celebrity.findById(id);
    res.render("celebrities/show", infoCelebrities);
  } catch (error) {
    console.error(error);
    next();
  }
};

const deleteCelebrity = async (req, res) => {
  const { id } = req.params;
  try {
    await Celebrity.findByIdAndRemove(id);
    res.redirect("/celebrities");
  } catch (error) {
    console.error(error);
  }
};

const editCelebrity = async (req, res) => {
  const { id } = req.params;
  try {
    const celebrity = await Celebrity.findById(id);
    res.render("celebrities/edit", celebrity);
  } catch (error) {
    console.error(error);
  }
};

const updateCelebrity = async (req, res) => {
  const { id } = req.params;
  const celebrity = req.body;
  try {
    await Celebrity.findByIdAndUpdate(id, celebrity);
    res.redirect("/celebrities");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findCelebrities,
  newGetCelebrity,
  newPostCelebrity,
  findCelebrity,
  deleteCelebrity,
  editCelebrity,
  updateCelebrity
};

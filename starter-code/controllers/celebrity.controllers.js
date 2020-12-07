const celebrity = require("../models/celebrity");
const Celebrity = require("../models/celebrity");


const getCelebrities = async (req, res) => {
  try {
    const celebrities = await celebrity.find();
    res.render("celebrities", { celebrities });
  } catch (err) {
    res.send(err);
  }
};

const getCelebrity = async (req, res) => {
  try {
      const { celebrityId } = req.params
      const celebrity = await Celebrity.findById(celebrityId)
      res.render("celebrity-detail", celebrity);
  } catch (err) {
      res.send(err)
  }
}

const createCelebrity = async (req, res) => {
  try { 
      await Celebrity.create(req.body)
      const celebrities = await Celebrity.find()
    res.render ("celebrities", {celebrities});
  } catch (err) {
    res.send(err)
  }
}

const updateCelebrity = async (req, res) => {
  try {
    const {celebrityId} = req.params
    const updatedCelebrity = await Celebrity.findByIdAndUpdate(celebrityId, req.body, {
      new: true,
    });
    res.render("celebrity-detail", updateCelebrity)
  } catch (err) {
    res.send(err)
  }
}

const deleteCelebrity = async (req, res) => {
  try{
    const {celebrityId} = req.params
    const removedCelebrity = await celebrity.findByIdAndDelete(celebrityId)
    console.log("removed celebrity", removedCelebrity);
    res.redirect("/celebrities")
  } catch (err) {
    res.send(err)
  }
}


module.exports = {
  getCelebrities, 
  getCelebrity,
  createCelebrity, 
  deleteCelebrity, 
  updateCelebrity
} 

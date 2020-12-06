const Celebrities = require("../models/celebrity")

const getCelebrities = async (req, res) => {
  try {
    const celebrities = await Celebrities.find()
    console.log("CELEBRITIES", celebrities)
    res.render("celebrities.hbs", {celebrities})
  } catch (err){
    res.send(err)
  }
}

const getCelebrity = async (req, res) => {
  try {
      const { celebrityId } = req.params
      console.log("CELEBRITY ID:", celebrityId)
      const celebrity = await Celebrities.findById(celebrityId)
      console.log("CELEBRITY", celebrity)
      res.render("celebrity-detail", celebrity)
  } catch (err) {
      res.send(err)
  }
}

const showCelebrityForm = async (req, res) => {
  try {
      res.render("new")
  } catch (err) {
      res.send(err)
  }
}

const createCelebrity = async (req, res) => {
  try {
    const { newCelebrity }= req.body
    const celebrity = await Celebrities.create(req.body)
    console.log("NEWCELEBRITY",newCelebrity)
    console.log("CELEBRITY", celebrity)
    res.redirect("/celebrities")
    //res.render("celebrities", celebrity)
  } catch (err) {
    res.send(err)
  }
}

const deleteCelebrity = async (req, res) => {
  try{
    const celebrityId  = req.params.celebrityId
    console.log("CELEBRITY ID:",celebrityId)
    const deleteCelebrity = await Celebrities.findByIdAndDelete(celebrityId)
    //res.send("sucess")
    res.redirect("/celebrities")
  } catch (err) {
    res.send(err)
  }
}

const updateCelebrity = async (req, res) => {
  try {
    const celebrityId = req.params.celebrityId
    const updatedCelebrityInfo = req.body
    const { name, occupation, catchPhrase} = req.body
    console.log("CELEBRITY ID:", celebrityId)
    console.log("UPDATED CELEBRITY", updatedCelebrityInfo)
    console.log("UPDATED DETAILS:", name, occupation, catchPhrase)
    const updateCelebrity = await Celebrities.findByIdAndUpdate(
      celebrityId,
      updatedCelebrityInfo, 
      {new: true})
    res.render("celebrity-detail", updateCelebrity)
  } catch (err) {
    res.send(err)
  }
}

module.exports = {
  getCelebrities, 
  getCelebrity,
  showCelebrityForm, 
  createCelebrity, 
  deleteCelebrity, 
  updateCelebrity
}
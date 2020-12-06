const Celebrity = require("../models/celebrity")

const getCelebrities = async (req,res) =>{
  try{
    const celebrities = await Celebrity.find();
    res.render('celebrities/index', {celebrities})
  }catch(e){

    console.error(e)
  }
}

const showCelebrityForm = async (req, res) => {
  res.render("celebrities/new");
};

const createCelebrity = async (req,res)=>{
  try{
    await Celebrity.create(req.body)
    const celebrities = await Celebrity.find()
    res.render("celebrities/index", {celebrities})
  }catch(e){
    res.render("celebrities/new")
    return e
  }
}
const getDetails = async (req,res) => {
  try{
    const {celebretyId} = req.params;
    const celebrity = await Celebrity.findById(celebretyId);
    res.render("celebrities/show", celebrity)
  }catch(e){
    console.error(e)
  }
}

const deleteCelebrity = async (req,res) =>{
  try{
    const id = req.params.celebretyId;
    const removeCelebrity = await Celebrity.findByIdAndRemove(id)
    console.log("removeCeleb", removeCelebrity)
    res.redirect('/celebrities')
  }catch(e){
    next()
    console.error(e)
  }
}

const showCelebrityUpdate = async (req, res) =>{
  try{
    const {celebretyId} = req.params;
    const editCelebrity = await Celebrity.findById(celebretyId);
    res.render("celebrities/edit", editCelebrity)
  }catch(e){
    next()
    return e
  }
}

const updateCelebrity = async (req,res)=>{
  try{
    const {celebrityId} = req.params;
    const {name,occupation,catchPhrase} = req.body;
    const updateCelebrity = await Celebrity.findByIdAndUpdate(celebrityId,{name,occupation,catchPhrase},{new:true})
    console.log(updateCelebrity)
    res.redirect('/celebrities')
  }catch(e){
    next()
    return e
  }
}
module.exports = {
  getCelebrities,
  getDetails,
  showCelebrityForm,
  createCelebrity,
  deleteCelebrity,
  showCelebrityUpdate,
  updateCelebrity
}
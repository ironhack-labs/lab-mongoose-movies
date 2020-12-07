const Celebrity = require("../models/Celebrity");

const getCelebrities = async (req, res) => {
  try{
    const celebrities = await Celebrity.find();
    //console.log(celebrities);
    res.render("celebrities/celebrities",{celebrities});
  } catch(err){
    res.send(err)
  }
}

const getOneCelebrity = async (req,res) =>{
  try{
    const { celebritiesId } = req.params
    const celebrity = await Celebrity.findById(celebritiesId);
    console.log(celebrity);
    res.render("celebrities/show",celebrity)
  } catch(err){
    res.send(err)
  }
}

const renderNewForm = async (req,res)=>{
  res.render("celebrities/new")
}

const createCelebrity = async (req,res) => {
  try{
      console.log(req.body);
      await Celebrity.create(req.body)
      res.redirect("/celebrities")
  }catch(err){
    //res.render("new")
    console.error(err);
  }
}

const deleteCelebrity = async (req,res) =>{
  try{
      const {celebrityId} = req.params;
      const removeCelebrity = await Celebrity.findByIdAndDelete(celebrityId)
      console.log("Removed",removeCelebrity);
      res.redirect("/celebrities")
  }catch(err){
    console.error(err);
  }
}

const renderUpdateCelebrity = async (req,res)=>{
  try{
    const {celebrityId} = req.params;
    const editCelebrity = await Celebrity.findById(celebrityId);
    res.render("celebrities/edit",editCelebrity)
  }catch(err){
    console.error(err);
  }
}

const updateCelebrity = async (req,res)=>{
  try{
      const {celebrityId} = req.params;
      const updateCelebrity = await Celebrity.findByIdAndUpdate(celebrityId, req.body,{
        new:true,
      });
      console.log("Req.body",req.body);
      console.log(updateCelebrity);
      res.redirect("/celebrities")
  }catch(err){
    console.error(err);
  }
}



module.exports = {
  getCelebrities,
  getOneCelebrity,
  renderNewForm,
  createCelebrity,
  deleteCelebrity,
  renderUpdateCelebrity,
  updateCelebrity
}
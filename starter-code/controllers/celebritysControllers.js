
const dataCeleb = require('../models/celebrity')




exports.celebrtysController = async (req,res,next)=>{
    const celebritys = await dataCeleb.find({})


    res.render('celebritys/celebritys', {celebritys})
}



exports.celebritysDetails = async (req,res)=>{
  const celeb = await dataCeleb.findById(req.params.celebrityid)
  console.log(celeb);
  res.render("celebritys/celebritysDetail", {celeb})

}
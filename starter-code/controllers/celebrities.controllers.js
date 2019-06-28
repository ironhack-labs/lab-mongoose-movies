const Celebrity= require('../models/Celebrity')

exports.findCelebrities=(req,res,nex)=>{
  Celebrity.find()
    .then(celebrities=>res.render('celebrities/all',{celebrities}))
    .catch(err=> res.render('celebrities/all',err))
} 
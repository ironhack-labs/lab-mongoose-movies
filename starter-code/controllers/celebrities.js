const Celebrity = require('../models/Celebrity')


//Iteration 2 
exports.allCelebritiesView = (req, res) => {
    Celebrity.find()
    .then(celebrities => res.render('celebrities', {celebrities}))
    .catch(err => console.error(err))
}

//Iteration 3 
// exports.celebrityDetail = async (req, res) => {
//     const celebrities = await Celebrity.findById(req.params.id)
//     .catch(err => console.error(err))
//     res.render('celebrities/show', celebrities)
// }

exports.celebrityDetail = (req, res, next) => {
    const ide = req.params.id
    Celebrity.findById({_id:ide})
    .then(celebritdet => res.render('celebrities/show', {celebritdet}))
    .catch(err => console.error(err))
}

// //Iteration 4 

exports.addCelebrityPost = async (req,res) => {
    const {name,occupation,catchPhrase} = req.body
    const newCelebrity = {name, occupation,catchPhrase}
    await Celebrity.create(newCelebrity)
    res.redirect('celebrities')
    }
    
// exports.addCelebrityView = async (req,res) => {
//     const {name,occupation,catchphrase} =
// }

const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')


mongoose.connect('mongodb://localhost/lab-mongoose-movies').then(() => {
  console.log('connected to mongoose')
})



const celebArr = [{name: 'Katya', occupation: 'Drag Queen', catchphrase: 'Spassisba'},
   {name: 'Alaska', occupation: "Drag Queen", catchphrase: "Hiiiiiieee"},
   {name: 'Nina Flower', occupation: 'DJ', catchphrase: 'Loca'}
]

Celebrity.create(celebArr).then(celeb => {
 console.log("celebs saved: ", celeb)
})
.catch(err => {
  console.log("error occured... ", err)
})

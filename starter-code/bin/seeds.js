const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebrities', { useNewUrlParser: true }, function(err) {
    if(err) console.log("ERROR")
    else console.log("connected")
})

const CelebritySchema = require('../models/Celebrity.js')

var newCeleb = [
  {name: "name1",
  occupation: "occupation1",
  catchPhrase: "catchPhrase1"},
  {name: "name2",
  occupation: "occupation2",
  catchPhrase: "catchPhrase2"},
  {name: "name3",
  occupation: "occupation3",
  catchPhrase: "catchPhrase3"}
]

CelebritySchema.create(newCeleb, (err) => {
  if(err) console.log(err)
  else console.log("instance added")
})
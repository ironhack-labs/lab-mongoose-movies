const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity");

mongoose
  .connect('mongodb://localhost/celebrities', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

Celebrity.create([
  {
  name: "Kelly Slater" ,
  occupation: "unknown",
  catchPhrase: "I love surfing in winter"
},{
  name: "Kanye West" ,
  occupation: "singer" ,
  catchPhrase: "Work hard, Play hard"
} , {
  name: "Kevin Hart" ,
  occupation: "comedian" ,
  catchPhrase: "I don´t know what I have to write here"
}]).then(celebrities => {
  console.log("Celebrities are implemented", celebrities)
});
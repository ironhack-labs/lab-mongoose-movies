const celebrityModel = require("../models/Celebrity");
const mongoose = require("mongoose");
const celebrities = [{
    name: "",
    occupation: "",
    catchPhrase: "",
},
{
    name: "",
    occupation: "",
    catchPhrase: "",
},
{
    name: "",
    occupation: "",
    catchPhrase: "",
}]

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

celebrityModel.create(celebrities)
    .then(dbRes => {
        console.log("Celebrities Inserted Successfully", dbRes)
    })
    .catch(dbErr => {
        console.log("OH NO!", dbErr);
    })
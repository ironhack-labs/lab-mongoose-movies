const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose.connect('mongodb://localhost/celebrity-lab', { useNewUrlParser: true });

const celebrity = [{
  name: "Johnny John" ,
  occupation: "Drugdealer",
  catchPhrase: "I get you everything"
}, {
  name: "Marry Jane" ,
  occupation: "Bavarian",
  catchPhrase: "I will I dont know"
},{
  name: "Superman" ,
  occupation: "Worldsavior",
  catchPhrase: "I am the best. Do good!"
  }];

Celebrity.create(celebrity).then(data => { console.log("Has been successfully entered") })
  .catch(err => {
  console.log(err)
})
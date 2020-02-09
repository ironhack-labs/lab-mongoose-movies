require('dotenv').config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const celebrity = [{
  name: "Groucho Marx",
  occupation: "Comedian",
  catchPhrase: "There are so many things in life more important than money! But they cost so much!"
},{
  name: "Mel Brooks",
  occupation: "Director, comedian....",
  catchPhrase: "Life literally abounds in comedy if you just look around you."
},{
  name: "Bill Murray",
  occupation: "Comedian and more",
  catchPhrase: "We're Americans! Do you know what that means? It means our forefathers were kicked out of every decent country in the world."
}

];
mongoose
    .connect('mongodb://localhost/starter-code', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
        Celebrity.deleteMany()
            .then(() => {
                return Celebrity.create(celebrity);
            })
            .then(() => {
                console.log("succesfully added all the data");
                mongoose.connection.close();
                process.exit(0);
            });
    })
    .catch(err => {
        console.error("Error connecting to mongo", err);
    });
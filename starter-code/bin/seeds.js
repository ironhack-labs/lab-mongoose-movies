const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose
 .connect("mongodb://localhost/mongooseMovie", { useNewUrlParser: true })
 .then(x => {
   console.log(
     `Connected to Mongo! Database name: "${x.connections[0].name}"`
   );
   start();
  
 })
 .catch(err => {
   console.error("Error connecting to mongo", err);
 });
function start() {
 Celebrity.deleteMany()
   .then(celebrityDroppedInfo => {
     Celebrity.create([
       {
         name: "Tom Cruise",
         occupation: 'Actor',
         catchPhrase: "When you have to cope with a lot of problems, you're either going to sink or you're going to swim."
       },
       {
         name: "Beyonce",
         occupation: 'Singer',
         catchPhrase: "I felt like it was time to set up my future, so I set a goal. My goal was independence."
       },
       {
         name: "Daffy Duck",
         occupation: `Fiction characte`,
         catchPhrase: "You have insulted me! We meet on the field of onion!"
       }
     ])
       .then(createdCelebrities => {
        process.exit(0);
       })
       .catch(error => {
         console.log(error);
       });
   });
}
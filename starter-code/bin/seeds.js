const mongoose = require("mongoose");
const Celebrities = require("../models/celebrity");
mongoose
 .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
 .then(x => {
   console.log(
     `Connected to Mongo! Database name: "${x.connections[0].name}"`
   );
 })
 .catch(err => {
   console.error("Error connecting to mongo", err);
 });


const fakeArr = [
  {
    name: "Willy",
    occupation: "Youtuber",
    catchPhrase: "Madre mía Willy",
  
},
{
  name: "Wonka",
  occupation: "Chocolatero",
  catchPhrase: "Los umpalumpas son mis esclavos",

},
{
  name:"Sito" ,
  occupation:"Teacher Assistant" ,
  catchPhrase: "Tira windows, cómprate un mac"
}
]

Celebrities.deleteMany().then(() => {
  Celebrities.insertMany(fakeArr).then(celebCreated => {
    console.log("I have finished!");
    process.exit(0);
  });
 });
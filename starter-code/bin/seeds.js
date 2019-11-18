const mongoose = require("mongoose");
const Celebrities = require("../models/celebrity");
mongoose
 .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
 .then(x => {
   console.log(`
     Connected to Mongo! Database name: "${x.connections[0].name}"`
   );
 })
 .catch(err => {
   console.error("Error connecting to mongo", err);
 });

const celebritiesArr = [{
    name:"er Manu",
    ocupation: "director",
    catchPhrase: "ou mama"
},

{
    name:"Dani",
    ocupation: "main actor",
    catchPhrase: "dam son"
} , 
{
    name:"Pepe",
    ocupation: "productor",
    catchPhrase: "i'm the best"
}
]

Celebrities.deleteMany().then(() => {
    Celebrities.insertMany(celebritiesArr).then(celebCreated => {
      console.log("I have finished!");
      process.exit(0);
    });
   });
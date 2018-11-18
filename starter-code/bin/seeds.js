const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const dbName = "celebrities";
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities =[
{
name: "Zinedine Zidane",
occupation: "Football player",
catchPhrase:"I believe in football"  
},
{
name: "Bill Murray",
occupation: "Actor",
catchPhrase:"I am the best actor"  
},
{
name: "David Beckham",
occupation: "Football Player",
catchPhrase:"Play for your dreams" 
}
]

Celebrity.create(celebrities, err => {
if (err) {
console.log("Celebrities not created. KO");
}
  console.log("Celebrities created OK");
});
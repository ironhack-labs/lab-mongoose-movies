// Iteration #1
// Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
const Celebrities = [
    {
        name:"Tom Cruise",
        occupation:"actor",
        catchPhrase:"I'm the best"
    },

    {
        name:"Beyonce",
        occupation:"singer",
        catchPhrase:"Put a ring on it"
    },
    {
        name:"Daffy Duck",
        occupation:"undefined",
        catchPhrase:"I don't know what to do with my live"
    }
]


// iibs requeries

require("dotenv").config();
require ('../config/db.config')

 
//Call the Celebrity model's create method with the array as argument.
//In the create method's callback, display feedback.
const mongoose     = require('mongoose');
const Celebrity = require("../models/celebrity.model");

Celebrity.deleteMany()
.then( () =>  {
  Celebrity.create(Celebrities)
  .then(celebrities => console.log(`${celebrities.length} Celebrities saved: `))
  .finally(() => {
    mongoose.connection
      .close()
      .then(() => console.log("Database close"))
      .then(() => process.exit());
  })
  .catch(error => { console.error('Error saving celebrities', error); })
}
)
.catch(e => console.log (`Error al borrar Drone collection: ${e}`))


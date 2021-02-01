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

// Iteration 7
const Movies = [
  
    {
        title:"Star Wars",
        genre: "Sciene-fiction",
        plot: "Amid a galactic civil war, Rebel Alliance spies have stolen plans to the Galactic Empire's Death Star, a massive space station capable of destroying an entire planet. Imperial Senator Princess Leia of Alderaan, secretly one of the Rebellion's leaders, has obtained its schematics, but her starship is intercepted by an Imperial Star Destroyer under the command of the ruthless Darth Vader. Before she is captured, Leia hides the plans in the memory of astromech droid R2-D2, who flees in an escape pod to the desert planet Tatooine accompanied by protocol droid C-3PO. "
    },
    {
        title:"The lion King",
        genre: "Animated films",
        plot: "In the Pride Lands of Africa, a pride of lions rules over the animal kingdom from Pride Rock. King Mufasa and Queen Sarabi present their newborn son, Simba, to the gathering animals by Rafiki the mandrill, the kingdom's shaman and advisor. "
    },
]


// iibs requeries

require("dotenv").config();
require ('../config/db.config')

 
//Call the Celebrity model's create method with the array as argument.
//In the create method's callback, display feedback.
const mongoose     = require('mongoose');
const Celebrity = require("../models/celebrity.model");
const Movie     = require("../models/movie.model")


Celebrity.deleteMany()
.then( () =>  {
  Celebrity.create(Celebrities)
  .then(celebrities => console.log(`${celebrities.length} Celebrities saved: `))
  .catch(error => { console.error('Error saving celebrities', error); })
}
)
.catch(e => console.log (`Error al borrar celebrities collection: ${e}`))

Movie.deleteMany()
.then( () =>  {
  Movie.create(Movies)
  .then(movies => console.log(`${movies.length} Celebrities saved: `))
  .finally(() => {
    mongoose.connection
      .close()
      .then(() => console.log("Database close"))
      .then(() => process.exit());
  })
  .catch(error => { console.error('Error saving movies', error); })
}
)
.catch(e => console.log (`Error al borrar movies collection: ${e}`))
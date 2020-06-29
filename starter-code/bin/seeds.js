const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity.model")

mongoose.connect(`mongodb://localhost/celebrityDb`)

Celebrity.collection.drop()




const Celebrities = [
  {
    name: "Tom Hanks",
    occupation: "Actor",
    catchPhrase: "Cuanto más sabes, más fácil te resulta aprender"
  },
  {
    name: "Keanu Reeves",
    occupation: "Actor",
    catchPhrase: "El mañana no está garantizado, ¡Así que vive hoy!"
  },
  {
    name: "John Williams",
    occupation: "Composer",
    catchPhrase: "La persona que uno ama al principio no es la persona que uno ama al final, y que el amor no es un fin sino un proceso a través del cual una persona intenta conocer a otra."
  },
]



Celebrity 
  .create(Celebrities)
  .then(allCelebrities => {
    console.log(`Los siguientes datos han sido añadidos a la base de datos`)
    mongoose.connection.close()
      })
      .catch(error => {
          throw new Error(`Impossible to add the celebrity. ${error}`)
      })
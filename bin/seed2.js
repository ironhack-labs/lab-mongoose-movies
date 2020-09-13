
const mongoose = require("mongoose");
const dbName = 'CebAndMoviesDB';
const Celebrity = require("../models/celebrity.model");

mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const celebrities = [
  {
    name: "Chiquito de la Calzada",
    nameLower:"chiquito de la calzada",
    ocupation: "Humorista",
    catchPhrase: "No te digo trigo te digo Rodrigo, hasta luego Lucas",
  },
  {
    name: "Belén Esteban",
    nameLower:"belen esteban",
    ocupation: "Princesa del pueblo",
    catchPhrase: "«Ambiciones era como ‘Falcon Crest’… No estaba JR, pero había la misma mala leche. Y en vez de lujo y glamour, allí no había más que polvo en verano y barro en invierno».",
  },
  {
    name: "Germantastico",
    nameLower:"germantastico",
    ocupation: "Master Developer",
    catchPhrase: "So!",
  }
  
];


Celebrity.create(celebrities)
.then(allCelebritiesCreated => console.log("Hemos creado ",allCelebritiesCreated.length, " celebrities en la base de datos"))
.catch(err=> console.log('Error: ',err))
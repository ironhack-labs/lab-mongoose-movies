const withDbConnection = require("../withDbConnection");
const Celebrity = require("../models/Celebrity");
const Movies = require("../models/Movies");

const dataCel = [
  { name: "Adam Samler", occupation: "Actor", catchPhrase: "Mola la leche" },
  {
    name: "Rubén Vaquero",
    occupation: "Ironhacker",
    catchPhrase: "Ni mondongo ni mondonga, dame mandanga"
  },
  {
    name: "Jim Carrey",
    occupation: "Actor",
    catchPhrase: "Mi enfoque es olvidar el dolor de la vida"
  }
];

const dataCel2 = [
  { title: "La vida es Bella", genre: "Drama", plot: "Peli bonita de cosas" },
  { title: "Terminator", genre: "Acción", plot: "Tiros" }
];

withDbConnection(async () => {
  //await Celebrity.collection.drop();
  await Celebrity.deleteMany();
  await Movies.deleteMany();
  await Celebrity.create(dataCel);
  await Movies.create(dataCel2);
});

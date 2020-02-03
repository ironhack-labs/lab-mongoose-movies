const { withDbConnection, dropIfExists } = require("../withDbConnection");
const celebrity = require("../models/celebrity");
const movies = require("../models/Movies");

const dataCelebrity = [
  { name: "Rafa Nadal", occupation: "Tennis Player", catchPhrase: "Vamos RAFA!" },
  { name: "Cristiano Ronaldo", occupation: "Soccer Player", catchPhrase: "Siiiiuuuuh" },
  { name: "Andres Montes", occupation: "Sport Journalist", catchPhrase: "La vida puede ser maravillosa" }
];

const dataMovie = [
  { title: "Snatch: cerdos y diamantes", genre: "Comedia", plot: "Robo de diamantes" },
  { title: "Malditos Bastardos", genre: "Acción", plot: "Segunda Guerra Mundial" }
];

withDbConnection(async () => {
  //await Celebrity.collection.drop();
  await celebrity.deleteMany();
  await movies.deleteMany();
  await celebrity.create(dataCelebrity);
  await movies.create(dataMovie);
});
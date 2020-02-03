const { withDbConnection, dropIfExists } = require("../withDbConnection");
const celebrity = require("../models/celebrity");
const movie = require("../models/movie");

withDbConnection(async () => {
  //await dropIfExists(celebrity);
  await celebrity.deleteMany();
  await celebrity.create([
    { name: "Rafa Nadal", occupation: "Tennis Player", catchPhrase: "Vamos RAFA!" },
    { name: "Cristiano Ronaldo", occupation: "Soccer Player", catchPhrase: "Siiiiuuuuh" },
    { name: "Andres Montes", occupation: "Sport Journalist", catchPhrase: "La vida puede ser maravillosa" }
  ]);
});

withDbConnection(async () => {
  //await dropIfExists(celebrity);
  await movies.deleteMany();
  await movies.create([
    {
      title: "The Godfather",
      genre: "Gansters",
      plot: "En el verano de 1945, se celebra la boda de Connie y Carlo Rizzi. Connie es la única hija de Don Vito Corleone, jefe de una de las familias que ejercen el mando de la Cosa Nostra en la ciudad de Nueva York."
    },
    {
      title: "Un ciudadno ejemplar",
      genre: "Accion-drama",
      plot: "Clyde Shelton es un hombre que lo ha perdido todo: diez años atrás su mujer y su hija fueron brutalmente asesinadas, pero el verdadero criminal no fue condenado."
    },
    {
      title: "Gladiator",
      genre: "acción-historia",
      plot: "En el año 180, el Imperio Romano domina todo el mundo conocido. Tras una gran victoria sobre los bárbaros del norte, el anciano emperador Marco Aurelio decide transferir el poder a Máximo, bravo general de sus ejércitos y hombre de inquebrantable lealtad al imperio. Pero su hijo Cómodo, que aspiraba al trono, no lo acepta y trata de asesinar a Máximo."
    }
  ]);
});


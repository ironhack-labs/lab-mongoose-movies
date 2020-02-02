const { withDbConnection, dropIfExists } = require("../withDbConnection");
// const Celebrity = require("../models/celebrity");
const Movies = require("../models/movies");

/*
withDbConnection(async () => {
  //await dropIfExists(celebrities);
  await Celebrity.deleteMany();
  await Celebrity.create([
    { name: "Bart Simpson", occupation: "Niño", catchPhrase: "Multiplicate por cero" },
    { name: "Homer Simpson", occupation: "Padre", catchPhrase: "Bart! D'oh!" },
    { name: "Joan Carballo", occupation: "Super heroe", catchPhrase: "Amos no me jodas ¿como que no funciona?" },
  ]);
});

*/

withDbConnection(async () => {
  //await dropIfExists(celebrities);
  await Movies.deleteMany();
  await Movies.create([
    {
      title: "John Wick 3",
      genre: "Acción",
      plot: "Un amante de los perros culmina su venganza"
    },
    {
      title: "Jurassik Park",
      genre: "Genética",
      plot: "La mejor película de todos los tiempos"
    },
    {
      title: "Jurassic World",
      genre: "Acción y Genética",
      plot: "El remake de la mejor película de todos los tiempos"
    }
  ]);
});

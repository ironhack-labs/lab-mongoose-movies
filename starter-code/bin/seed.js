const { withDbConnection, dropIfExists } = require("../withDbConnection");
const mongoose = require("mongoose");
const celebrity = require("../models/celebrity");
const movies = require("../models/movies");

withDbConnection(async () => {
  await dropIfExists(celebrity);
  await celebrity.create([
    {
      name: "Bad Gyal",
      occupation: "Singer",
      catchPhrase: "El pussy k mana."
    },
    {
      name: "La Zowi",
      occupation: "Singer",
      catchPhrase: "Lo que hago es música punk y la música punk no se explica."
    },
    {
      name: "DJ Florentino",
      occupation: "Producer",
      catchPhrase: "El más romántico de los románticos."
    },
    {
      name: "Cecilio G.",
      occupation: "Singer",
      catchPhrase: "Yo soy de la calle, yo no soy Bad Gyal."
    }
  ]);
  await movies.create([
    {
      title: "Gui tu lie che",
      genre: "Documentary, Drama",
      plot:
        "A couple embarks on a journey home for Chinese new year along with 130 million other migrant workers, to reunite with their children and struggle for a future. Their unseen story plays out as China soars towards being a world superpower. "
    },
    {
      title: "Todo sobre mi madre",
      genre: "Drama",
      plot:
        "Madrid. Manuela, una madre soltera, ve morir a su hijo el día en que cumple 17 años, por echarse a correr para conseguir el autógrafo de Huma Rojo, su actriz favorita. Destrozada, Manuela viaja entonces a Barcelona en busca del padre del chico."
    },
    {
      title: "Cold War",
      genre: "Drama, History, Music",
      plot:
        "In the 1950s, a music director falls in love with a singer and tries to persuade her to flee communist Poland for France. "
    }
  ]);
});

//it1 : check the database with mongo to confirm that your data was saved

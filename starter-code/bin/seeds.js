const celebrity = require("../models/Celebrity");
const movie = require("../models/Movie");
const { withDbConnection, dropIfExists } = require("../withDbConnection");

withDbConnection(async () => {
  await dropIfExists(movie);
  // await celebrity.create([
  //   {
  //     name: "Dani Rovira",
  //     occupation: "Comedian",
  //     catchPhrase: "Er taperwé"
  //   },
  //   {
  //     name: "Heath Ledger",
  //     occupation: "Actor",
  //     catchPhrase: "Why so serious"
  //   },
  //   {
  //     name: "Chadwick Boseman",
  //     occupation: "Actor",
  //     catchPhrase: "Wakanda forever"
  //   }
  // ]);
  await movie.create([
    {
      title: "fight club",
      genre: "Thriller",
      plot: "Hay que verla"
    },
    {
      title: "Harry potter",
      genre: "Magic",
      plot: "Leviousa"
    },
    {
      title: "Advengers",
      genre: "Accion",
      plot: "Flipas!"
    }
  ]);
});

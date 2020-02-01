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
      title: "Harry Potter1",
      genre: "Magic",
      plot: "Leviousa"
    },
    {
      title: "Harry Potter2",
      genre: "Magic",
      plot: "Leviousa"
    },
    {
      title: "Harry Potter3",
      genre: "Magic",
      plot: "Leviousa"
    }
  ]);
});

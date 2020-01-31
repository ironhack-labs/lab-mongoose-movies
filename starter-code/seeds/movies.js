const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Movie = require("../models/Movie");

withDbConnection(async () => {
  await dropIfExists(Movie);
  await Movie.create(
    {
      title: "Joker",
      genre: "Suspense/Drama",
      plot:
        "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City."
    },
    {
      title: "Terminator",
      genre: "Action",
      plot:
        "Disguised as a human, a cyborg assassin known as a Terminator travels from 2029 to 1984 to kill Sarah Connor "
    }
  );
});

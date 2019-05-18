  const mongoose = require("mongoose");
  const Movie = require("../models/Movie");

  const dbName = "DaylyCelebrity";
  mongoose.connect(`mongodb://localhost/${dbName}`);

  const movie = [
    {
      title: "Avenger",
      genre: "action",
      plot:
        "agkwangjnjgesjrselievesjosmoksmmeklmvkesmvklsemvkslselkfmlesfesgoñesgij"
    },
    {
      title: "jkwahgiuhgia",
      genre: "romance",
      plot:
        "agkwangjnjgesjrselievesjosmoksmmeklmvkesmvklsemvkslselkfmlesfesgoñesgij"
    },
    {
      title: "Avengawogjaogjwger",
      genre: "drama",
      plot:
        "agkwangjnjgesjrselievesjosmoksmmeklmvkesmvklsemvkslselkfmlesfesgoñesgij"
    }
  ];

  Movie.create(movie)
    .then(movieCreated => {
      console.log(`Creados ${movieCreated.length} peliculas`);
      mongoose.connection.close();
    })
    .catch(err => console.log(`Hubo un error: ${err}`));

// const celebrityModel = require("./../models/celebrity");

require("./../app");

// const celebrities = [
//     {
//       name: "Beyonce",
//       occupation: "Singer",
//       catchPhrase: "A diva is a female version of a hustler",
//     },
//     {
//         name: "Britney Spears",
//         occupation: "Singer",
//         catchPhrase: "If you seek amy",
//       },
//       {
//         name: "Maluma",
//         occupation: "Singer",
//         catchPhrase: "Pretty boy dirty boy",
//       },
//   ];

//   celebrityModel.insertMany(celebrities)
//   .then((dbRes) => console.log(dbRes))
//   .catch((dbErr) => console.error(dbErr))


const movieModel = require("./../models/movies");

  const movies = [
    {
      title: "Greatmovie",
      genre: "Comedy",
      plot: "A death dog falls in love with a ball",
    },
    {
        title: "Killkillkill",
        genre: "Drama",
        plot: "A group of feminists decides to kill all paternalistic guys leading to mass murder ",
      }
  ];

  movieModel.insertMany(movies)
  .then((dbRes) => console.log(dbRes))
  .catch((dbErr) => console.error(dbErr));
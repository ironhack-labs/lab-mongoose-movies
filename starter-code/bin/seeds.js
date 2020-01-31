const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

withDbConnection(async () => {
  await dropIfExists(Celebrity);
  await dropIfExists(Movie);
  await Celebrity.create([
    {
      name: "Steve Jobs",
      occupation: "entrepreneur",
      catchPhrase: "I never did it for money"
    },
    {
      name: "Jeff Bezos",
      occupation: "entrepreneur",
      catchPhrase: "Work hard, have fun, make history"
    },
    {
      name: "Bill gates",
      occupation: "entrepreneur",
      catchPhrase: "To win big, sometimes you need to take big risks."
    }
  ]);

  await Movie.create([
    {
      title: "Joker",
      genre: "suspense",
      plot:
        "It focuses on Batman's iconic arch nemesis and is an original, independent story that has not been seen before on the big screen."
    },
    {
      title: "wall street wolf",
      genre: "dramatic / comedy",
      plot:
        "Jordan Belfort, a New York stockbroker, who founded the Stratton Oakmont company while still a twenties, develops habits of excess and corruption."
    },
    {
      title: "Seven",
      genre: "dramatic / mistery",
      plot:
        "Somerset is a lonely and veteran detective about to retire who meets Mills, a young impulsive. Both investigate a particular murder. This is the first of a series of crimes that allude to the seven deadly sins."
    }
  ]);
});

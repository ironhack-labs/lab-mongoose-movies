/*const CelebrityModel = require("/models/celebrity");
const mongoose = require("mongoose");
const celebrity = [
    {
        name: "Will Smith",
        occupation: "actor",
        catchPhrase: "HAHAHAHA",
    },
    {
        name: "Christian Bale",
        occupation: "actor",
        catchPhrase: "I'm Batman" ,
    },
    {
        name: "Dwayne Johnson" ,
        occupation: "actor",
        catchPhrase: "I'll destroy you",
    }
]
mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
.then(x => {
   console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
   celebrityModel.create(celebrities)
  .then(success => {
          console.log("Yay", success)
          })
  .catch(fail => {
      console.error("No", fail)
        });
     })
.catch(err => {
    console.error('Error connecting to mongo', err)
});

*/

MoviesModel = require("/models/celebrity");
const mongoose = require("mongoose");
const movies = [
    {
        title: "Avenger Infinity War",
        genre: "Fantasy",
        plot: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
    },
    {
        title: "Titanic",
        genre:"action-packed romance",
        plot:" It is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the ship of dreams -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.",
    },
    {
        title:"Avatar",
        genre:"Science Fiction",
        plot:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.",
    }

]

mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  movieModel.create(movies)
  .then(success => {
    console.log("Yay", success)
  })
  .catch(fail => {
    console.error("No", fail)
  });
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});


const mongoose = require("mongoose");
const Celebrity = require("../model/celebrity");
const Movie = require("../model/movie");

mongoose.connect("mongodb://localhost/starter-code");

const celebrities = [
  {
    name: "James Hetfield",
    occupation: "singer, guitar player",
    catchPhrase: "Hell yeah!",
  },
  {
    name: "Bruce DIckinson",
    occupation: "singer, pilot",
    catchPhrase: "Scream for me...",
  },
  {
    name: "Alexandre Ottoni",
    occupation: "podcaster and youtuber",
    catchPhrase: "Lambda, lambda, lambda",
  },
];

// Celebrity.create(celebrities)
//     .then(response => {
//         console.log(response)
//         mongoose.connection.close()
//     })
//     .catch(error => console.log(error))

const movies = [
  {
    title: "The Dark Knight",
    genre: "action",
    plot:
      "In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchistic mastermind known as the Joker (Ledger), who seeks to undermine Batman's influence and turn the city to chaos.",
  },
  {
    title: "Forrest Gump",
    genre: "Comedy/Drama",
    plot:
      "Forrest Gump is a 1994 American comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel of the same name by Winston Groom and stars Tom Hanks, Robin Wright, Gary Sinise, Mykelti Williamson and Sally Field. The story depicts several decades in the life of Forrest Gump (Hanks), a slow-witted but kind-hearted man from Alabama who witnesses and unwittingly influences several defining historical events in the 20th century United States.",
  },
  {
    title: "The Godfather",
    genre: "crime",
    plot:
      "The Godfather is a 1972 American crime film directed by Francis Ford Coppola who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same name. It is the first installment in The Godfather trilogy. The film features an ensemble cast including Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton. The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of one of his sons, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.",
  },
];

Movie.create(movies)
  .then((response) => {
    console.log(response);
    mongoose.connection.close();
  })
  .catch((error) => console.log(error));

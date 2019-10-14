const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");
const mongoose = require("mongoose");

const celebrities = [
  {
    name: "Kanye West",
    occupation: "Singer",
    catchPhrase:
      "People always tell you, 'Be humble. Be humble.' When was the last time someone told you to be amazing?"
  },
  {
    name: "Eminem",
    occupation: "Singer",
    catchPhrase:
      "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."
  },
  {
    name: "Arnold Shwarzenegger",
    occupation: "Singer",
    catchPhrase: "I'll be Back"
  }
];

// async function fillDataBase(arr) {
//   let response = await Celebrity.insertMany(arr);
//   console.log(response);
//   if (response.length) {
//     console.log("Celebrities were added to database!");
//   } else {
//     console.log("Something went wrong!");
//   }
// }

// fillDataBase(celebrities);

const movies = [
  {
    title: "Titanik",
    genre: "Drama",
    plot:
      "A love story doomed by the depths of the Atlantic Ocean. Rose Calvert, now 101 reminiscences her experience of the Titanic"
  },
  {
    title: "Fantastic 4",
    genre: "Action",
    plot:
      "Throughout its relatively quiet production cycle, The Fantastic Four has dropped pieces of information that, for better or worse, have successfully distinguished the 2015"
  },
  {
    title: "Terminator",
    genre: "Fantastic",
    plot: "I'll be Back"
  }
];

// async function fillDataBase(arr, arr2) {
//   let response = await Movie.insertMany(arr);
//   let response2 = await Celebrity.insertMany(arr2);

//   if (response.length && response2.length) {
//     console.log("Movies and celebrities  were added to database!");
//   } else {
//     console.log("Something went wrong!");
//   }
// }

// fillDataBase(movies, celebrities);

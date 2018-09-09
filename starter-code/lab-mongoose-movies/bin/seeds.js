


// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');

// const dbName = 'lab-mongoose-movies';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {

//     name : "Cris Rock",
//     occupation: "Actor",
//     catchPhrase: "every celebrity needs a good catch phrase",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//   },
//   {
//     name : "Tom Crus",
//     occupation: "Actor",
//     catchPhrase: "every celebrity needs a good catch phrase",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",

//   },
//   {
//     name : "Madona",
//     occupation: "Singer",
//     catchPhrase: "every celebrity needs a good catch phrase",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",

//   },
//   {
//     name : "Slash",
//     occupation: "Guitarest",
//     catchPhrase: "every celebrity needs a good catch phrase",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",

//   },
//   {
//     name : "Eric Clapton",
//     occupation: "Guitarest",
//     catchPhrase: "every celebrity needs a good catch phrase",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",

//   },
//   {
//     name : "Lebron James",
//     occupation: "Basketball Player",
//     catchPhrase: "every celebrity needs a good catch phrase",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",

//   },
//   {
//     name : "Cris Pol",
//     occupation: "Basketball Player",
//     catchPhrase: "every celebrity needs a good catch phrase",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",

//   },
//   {
//     name : "Michael Jorden",
//     occupation: "asketball Player",
//     catchPhrase: "every celebrity needs a good catch phrase",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg",

//   }
// ];

// Celebrity.create(celebrities)
// .then((theThingIGet)=>{
//   console.log(theThingIGet);
// })
// .catch((err)=>{
//   console.log(err);
// })



const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title : "A Wrinkle in Time",
    genre: "Ava DuVernay",
    plot: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    title : "The Strangers: Prey at Night",
    genre: "Johannes Roberts",
    plot: "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title : "The Hurricane Heist",
    genre: "Rob Cohen",
    plot: "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title : "Gringo",
    genre: "Nash Edgerton",
    plot: "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title : "Thoroughbreds",
    genre: "Cory Finley",
    plot: "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title : "The Leisure Seeker",
    genre: "Paolo Virzì",
    plot: "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title : "Black Panther",
    genre: "Ryan Coogler",
    plot: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title : "Red Sparrow",
    genre: "Francis Lawrence",
    plot: "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
];


Movie.create(movies)
.then((theThingIGet)=>{
  console.log(theThingIGet);
})
.catch((err)=>{
  console.log(err);
})
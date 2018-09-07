


const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {

    name : "Cris Rock",
    occupation: "Actor",
    catchPhrase: "every celebrity needs a good catch phrase",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    name : "Tom Crus",
    occupation: "Actor",
    catchPhrase: "every celebrity needs a good catch phrase",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",

  },
  {
    name : "Madona",
    occupation: "Singer",
    catchPhrase: "every celebrity needs a good catch phrase",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",

  },
  {
    name : "Slash",
    occupation: "Guitarest",
    catchPhrase: "every celebrity needs a good catch phrase",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",

  },
  {
    name : "Eric Clapton",
    occupation: "Guitarest",
    catchPhrase: "every celebrity needs a good catch phrase",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",

  },
  {
    name : "Lebron James",
    occupation: "Basketball Player",
    catchPhrase: "every celebrity needs a good catch phrase",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",

  },
  {
    name : "Cris Pol",
    occupation: "Basketball Player",
    catchPhrase: "every celebrity needs a good catch phrase",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",

  },
  {
    name : "Michael Jorden",
    occupation: "asketball Player",
    catchPhrase: "every celebrity needs a good catch phrase",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg",

  }
];

Celebrity.create(celebrities)
.then((theThingIGet)=>{
  console.log(theThingIGet);
})
.catch((err)=>{
  console.log(err);
})
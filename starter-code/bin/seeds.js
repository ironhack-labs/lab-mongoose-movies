const mongoose = require('mongoose')
 
const Celebrity = require("../models/celebrity");

const celebrities = [
    {
      name: "Tom Cruise",
      occupation: "Actor" ,
      catchPhrase: "scientology"
    },
    {
        name: "Homero Simpson",
        occupation: "Actor" ,
        catchPhrase: "D'oh!"
    },
    {
        name: "Kim Kardashian",
        occupation: "Unkown" ,
        catchPhrase: "Unkown"
    },

];

module.exports = celebrities; 
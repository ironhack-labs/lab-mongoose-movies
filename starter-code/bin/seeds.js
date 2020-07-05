const mongoose = require('mongoose');
require("../app.js")
const Celebrity = require('../models/celebrity');

const celebrities = [
    {
      name: "Bianca del Rio",
      occupation: "Season 6 winner",
      catchPhrase: "Not today, Satan",
    },
    {
      name: "Shangela",
      occupation: "Runner up",
      catchPhrase: "Halelloo",
    },
    {
      name: "Valentina",
      occupation: "Model",
      catchPhrase: "I'd like to keep it on, please",
      }
  
  ]

  Celebrity.deleteMany({})
  .then(() => Celebrity.create(celebrities))
  .then((celebrities) => console.log("Added Celebrities Successfully.", celebrities))
  .catch((error) => console.log(error))


  
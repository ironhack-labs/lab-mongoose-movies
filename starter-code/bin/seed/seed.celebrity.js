const mongoose = require('mongoose');
require("./../../app") ;
const celebrityModel = require("./../../models/Celebrity.model")
const artists = [
    { name: 'Guillaume', occupation: "Rockstar", catchPhrase: "Wax on, wax off" },
    { name: 'Nina', occupation: "CSS Queen", catchPhrase: "screenshot it" },
    { name: 'Vincent', occupation: "Life coach" , catchPhrase: "what are you trying to do" }
  ];
  celebrityModel.insertMany(artists)
  .then(insertCelebrity => console.log(insertCelebrity))
  .catch(err => console.log(err))

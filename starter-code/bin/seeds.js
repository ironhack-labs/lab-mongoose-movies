const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseMovies', { useNewUrlParser: true }, function(err) {
    if(err) console.log("ERROR")
    else console.log("connected")
})

// const Celebrity = require('../models/Celebrity.js')

// var newCeleb = [
//   {name: "name1",
//   occupation: "occupation1",
//   catchPhrase: "catchPhrase1"},
//   {name: "name2",
//   occupation: "occupation2",
//   catchPhrase: "catchPhrase2"},
//   {name: "name3",
//   occupation: "occupation3",
//   catchPhrase: "catchPhrase3"}
// ]

// Celebrity.create(newCeleb, (err) => {
//   if(err) console.log(err)
//   else console.log("instance added")
// })

const Movie = require('../models/Movie.js')

var newMovies = [
  {title: "Black Panther",
  genre: "Action",
  plot: "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war."},
  {title: "Bohemian Rhapsody",
  genre: "Biography",
  plot: "Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day."},
  {title: "Roma",
  genre: "Drama",
  plot: "A year in the life of a middle-class family's maid in Mexico City in the early 1970s."}
]

Movie.create(newMovies, (err) => {
  if(err) console.log(err)
  else console.log("instances added")
})
// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');

// const dbName = 'celebrity_project';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Tom Cruise",
//     occupation: "Actor",
//     catchPhrase: "Nothing ends nicely, that's why it ends." 
//   },
//   {
//     name: "Beyonce",
//     occupation: "Singer",
//     catchPhrase: "Power's not given to you. You have to take it."
//   },
//   {
//     name: "Daffy Duck",
//     occupation: "Animated cartoon character",
//     catchPhrase: "Youuu're deththpicable!"
//   }
// ]
// Celebrity.collection.drop();

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// });

const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'celebrity_project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "The Lion King",
    genre: "Animation",
    plot: "The Lion King tells the story of Simba, a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba's uncle Scar (Mufasa's jealous younger brother), murders Mufasa, Simba is manipulated into thinking he was responsible and flees into exile. Upon maturation living with two wastrels, Simba is given some valuable perspective from his childhood friend, Nala, and his shaman, Rafiki, before returning to challenge Scar to end his tyranny and take his place in the Circle of Life as the rightful King." 
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy & Adventure",
    plot: "n the Second Age of Middle-earth, the lords of Elves, Dwarves, and Men are given Rings of Power. Unbeknownst to them, the Dark Lord Sauron forges the One Ring in Mount Doom, infusing into it a great part of his power to dominate, through it and at a distance, the other Rings, so he might conquer Middle-earth. A final alliance of men and elves battles Sauron’s forces in Mordor, where Prince Isildur of Gondor severs Sauron's finger, and the Ring with it, thereby destroying his physical form. With Sauron's first defeat, the Third Age of Middle-earth begins. Unfortunately, the Ring's influence corrupts Isildur, and, rather than destroy the Ring, Isildur takes it for himself. Isildur is later killed by Orcs, and the Ring is lost for 2,500 years, until it is found by Gollum, who owns it for five centuries. The Ring is then found by a Hobbit named Bilbo Baggins."
  },
  {
    title: "Deadpool 2",
    genre: "Superhero",
    plot: "After successfully working as the mercenary Deadpool for two years, Wade Wilson fails to kill one of his targets on his anniversary with his girlfriend Vanessa. That night, after the pair decides to start a family together, the target tracks Wilson down and kills Vanessa. Wilson kills the man in revenge. He blames himself for her death and attempts to commit suicide six weeks later by blowing himself up. Wilson has a vision of Vanessa in the afterlife, but the pieces of his body remain alive and are put back together by Colossus. Wilson is left with only a Skee-Ball token, an anniversary gift, as a final memento of Vanessa."
  }
]
Movie.collection.drop();

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});
const mongoose = require("mongoose");
const celebrityModel = require("../models/Celebrity");
const movieModel = require("../models/Movie");

// const celebs = [
//   {
//     name: "Matthew McConaughey",
//     occupation: "Actor / Sexy Beast",
//     catchPhrase: "All right all right all right !!"
//   },
//   {
//     name: "Nina Gautreau",
//     occupation: "Web Dev",
//     catchPhrase: "Ok boomer"
//   },
//   {
//     name: "Lucien Debon",
//     occupation: "Cellist",
//     catchPhrase: "Pour autant..."
//   }
// ]

// mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
// .then(x => {
//   console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//   celebrityModel.create(celebs)
//   .then(success => {
//     console.log("YAYYY", success)
//   })
//   .catch(fail => {
//     console.error("NOOOOO", fail)
//   });
// })
// .catch(err => {
//   console.error('Error connecting to mongo', err)
// });

const movies = [
  {
    name: "Brazil",
    genre: "Sci-Fi",
    plot: "Sam Lowry is a harried technocrat in a futuristic society that is needlessly convoluted and inefficient. He dreams of a life where he can fly away from technology and overpowering bureaucracy, and spend eternity with the woman of his dreams. While trying to rectify the wrongful arrest of one Harry Buttle, Lowry meets the woman he is always chasing in his dreams, Jill Layton. Meanwhile, the bureaucracy has fingered him responsible for a rash of terrorist bombings, and both Sam and Jill's lives are put in danger."
  },
  {
    name: "Blade Runner",
    genre: "Sci-Fi",
    plot: "In the 21st century, a corporation develops human clones to be used as slaves in colonies outside the Earth, identified as replicants. In 2019, a former police officer is hired to hunt down a fugitive group of clones living undercover in Los Angeles."
  },
  {
    name: "The Shining",
    genre: "Horror",
    plot: "Signing a contract, Jack Torrance, a normal writer and former teacher agrees to take care of a hotel which has a long, violent past that puts everyone in the hotel in a nervous situation. While Jack slowly gets more violent and angry of his life, his son, Danny, tries to use a special talent, the 'Shining', to inform the people outside about whatever that is going on in the hotel."
  }
]

mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  movieModel.create(movies)
  .then(success => {
    console.log("YAYYY", success)
  })
  .catch(fail => {
    console.error("NOOOOO", fail)
  });
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});





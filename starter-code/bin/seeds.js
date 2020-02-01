// const celebrityModel = require("../models/Celebrity");
// const mongoose = require("mongoose");
// const celebrities = [
//   { name:'Shakira',
//     occupation:'singer',
//     catchPhrase:'waka-waka',
//   },
//   { name:'Jim Carrey',
//     occupation:'actor',
//     catchPhrase:'I am funny!',
//   },
//   { name:'Bombo Fica',
//     occupation:'comedian',
//     catchPhrase:'sospechosa la wea...',
//   }
// ];

// mongoose
//   .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//       celebrityModel
//         .insertMany(celebrities)
//         .then(dbRes => {
//           console.log("Celebrities created");
//         })
//         .catch(err => {
//           console.log("there was an error creating the celebrity");
//         });
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err);
//   });

const movieModel = require("../models/Movie");
const mongoose = require("mongoose");
const movies = [
  { title:'Shakira in the jungle',
    genre:'adventure',
    plot:'Shakira se encuentra sola en la jungla y tiene muchas aventuras.',
  },
  { title:'Jim Carrey y Sahkira en la jungla',
    genre:'romance y drama',
    plot:'Jim encuentra a Sahkira y se enemora perdidamente de ella.',
  },
  { title:'Bombo Fica, Jim Carray y Shakira en la jungla',
    genre:'comedia',
    plot:'Jim y Shakira encuentran a Bombo en la jungla y muchas cosas comienzan a suceder',
  }
];

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
      movieModel
        .insertMany(movies)
        .then(dbRes => {
          console.log("Movies created");
        })
        .catch(err => {
          console.log("there was an error creating the movie");
        });
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });



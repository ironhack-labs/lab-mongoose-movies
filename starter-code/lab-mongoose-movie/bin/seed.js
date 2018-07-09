require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrities');
const Movie = require('../models/Movies');

mongoose.connect(`mongodb://localhost/lab-mongoose-movies`);

const celebrities = [
    {
        name:"Luis Miguel",
        occupation:"singer",
        catchPhrase: "Por Favor mienteme"

    },
    {
        name: "Brad Pitt",
        occupation:"actor",
        catchPrase: "Where is Coronel Sanders"
    },
    {
        name: "Rita la Cantoaora",
        occupation: "singer",
        catchPrase: "Si lo hago yo, lo hacen todos"
    }

]
 Celebrity.collection.drop();
// Movies.collection.drop();

Celebrity.create(celebrities, (err, data) => {
  if (err) { throw(err) }

  console.log(`Created ${celebrities.length} celebrities`);

});

// const comments = [
//     {
//       book: data[0]._id,
//       text:'Este libro me parece una basura'
//     }
//   ];
//   console.log(comments);

//   // We have the books created, now create the comments
//   Comment.create(comments)
//     .then( () => {
//       mongoose.disconnect();
//     });
// });

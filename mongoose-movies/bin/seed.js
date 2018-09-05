const mongoose = require("mongoose");
const Celebrity = require ("../models/celebrity.js");


mongoose
  .connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebData =[
  {
    name: "Nicky Minaj",
    occupation: "Singer",
    catchPhrase: "You ain't got that money bitch"
  },
  {
    name: "Cardy B",
    occupation:"Rapper",
    catchPhrase:"Move your fat ass out my face"
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "Go get what you want, Period."
  }
];


Celebrity.create(celebData)
  .then(celebDoc =>  {
    console.log(`CREATED Celebrities ${celebDoc.length} `);
  })
    .catch(err => next(err));





// bookData.forEach(oneBook => {
//   Author.create(oneBook.author)
//   .then(authorDoc => {
//     console.log(`${authorDoc.firstName} ${authorDoc.lastName}`);

//     oneBook.author = authorDoc._id;
//     return  Book.create(oneBook)
//     .then(bookDoc =>{
//       console.log( `Created BOOK *{bookDoc.title}` );
//     });
//   })
//   .catch(err => {
//     console.log("create Faillure!", err)
//   })
// });



// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');

// const dbName = 'mongoose-movies';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrityList = [{
//   name: 'SnoopyDog',
//   occupation: 'house-security',
//   catchPhrase: 'au-au',
// }, {
//   name: 'Pluto',
//   occupation: 'dog-hacker',
//   catchPhrase: 'hello DOG world!',
// }, {
//   name: 'Lessie',
//   occupation: 'baby-sitter',
//   catchPhrase: 'Dont cry, baby!',
// }];

// Celebrity.create(celebrityList, (err) => {
//   if (err) { throw (err); }
//   console.log(`Created ${celebrityList.length} au-au-celebrities`);
//   mongoose.connection.close();
// });
// #########################################################################

const mongoose = require('mongoose');
const Book = require('../models/book');
const Author = require('../models/author');

const dbtitle = 'library-project';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Book.collection.drop();
Author.collection.drop();

const celebrityList = [{
  name: 'SnoopyDog',
  occupation: 'house-security',
  catchPhrase: 'au-au',
}, {
  name: 'Pluto',
  occupation: 'dog-hacker',
  catchPhrase: 'hello DOG world!',
}, {
  name: 'Lessie',
  occupation: 'baby-sitter',
  catchPhrase: 'Dont cry, baby!',
}];


// const findAuthors = Promise.all(createCelebrities)
//   .then(name => celebrity.map(show => name.findOne({ name: _id.celebrities.name, lastName: _id.celebrities.lastName })
//     .then((id) => {
//       if (!id) {
//         throw new Error(`unknown name ${celebrities.id.name} ${celebrities.id.lastName}`);
//       }
//       return Object.assign({}, name, { celebrities: name._id });
//     })))
//   .catch((error) => {
//     throw new Error(error);
//   });

// const saveCelebrity = findCelebrity.then(findCelebrities => Promise.all(findCelebrities)
//   .then(celebrity => celebrity.map((celebrity) => {
//     const newCelebrity= new Celebrity(celebrity);
//     return newCelebrity.save();
//   }))).then((savedCelebrities) => {
//   Promise.all(savedCelebrities)
//     .then(celebrity => celebrity.forEach(celebrity => console.log(`created ${celebrity.name}`)))
//     .then(() => mongoose.connection.close())
//     .catch(err => console.log('Error while saving the celebrity: ', err));
// });

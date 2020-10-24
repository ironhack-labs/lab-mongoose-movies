const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();

const celebrities = [
  {
    name: "Gribouille",
    occupation: "Teddy Bear", 
    catchPhrase: "Be sweet"
  },
  {
    name: "Bobby Fischer",
    occupation: "Chess Player", 
    catchPhrase: "Best by test"
  },
  {
    name: "Augustus",
    occupation: "Imperator", 
    catchPhrase: "Make haste slowly."
  },
 
]

Celebrity.create(celebrities)
    .then( celebrity => console.log(`The celebrity ${celebrity.name} is saved`))
    .catch(err => console.log(err))

// const createAuthors = books.map(book => {
//   const newAuthor = new Author(book.author)
//   return newAuthor.save()
//   .then(author => {
//     return author.name;
//   })
//   .catch(error => {
//     throw new Error(`Impossible to add the author. ${error}`)
//   })
// })


// let findAuthors = Promise.all(createAuthors)
//   .then(authors => {
//     return books.map(book => {
//        return Author.findOne({name: book.author.name, lastName: 
// book.author.lastName})
//         .then(author => {
//           if (!author) {
//             throw new Error(`unknown author ${book.author.name} 
// ${book.author.lastName}`);
//           }
//           return Object.assign({}, book, {author: author._id});
//         })
//     });
// })
// .catch(error => {
//   throw new Error(error)
// })

// const saveBooks = findAuthors.then(findAuthors => {
//   return Promise.all(findAuthors)
//   .then(books => {
//     return books.map(book => {
//         const newBook = new Book(book);
//         return newBook.save();
//     })
//   })
// }).then(savedBooks => {
//   Promise.all(savedBooks)
//   .then(books => books.forEach(book => 
// console.log(`created ${book.title}`)))
//   .then(() => mongoose.connection.close())
//   .catch(err => console.log("Error while saving the book: ",err))
// })
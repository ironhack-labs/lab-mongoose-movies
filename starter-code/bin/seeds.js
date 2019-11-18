const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');

const dbName = 'celebrityLibrary';


// const celebrity = [
//   {
//     name: 'Julia Roberts',
//     occupation: 'actrice',
//     catchPhrase: 'kjahahhahaajjaka'
//   },
//   {
//     name: 'Britney',
//     occupation: 'singer',
//     catchPhrase: 'hahhahahahhaa'
//   },
//   {
//     name: 'Elvis',
//     occupation: 'singer',
//     catchPhrase: 'uauauuauaua'
//   }
// ];

//create the db, inserted the objs and close the connection to only create once
mongoose
  .connect('mongodb://localhost:27017/celebrityLibrary', {
    useNewUrlParser: true
  })
  .then(() => {
    return Celebrity.create(celebrity);
  })
  .then((insertedDocuments) => {
    console.log('Inserted documents: ', insertedDocuments.length);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
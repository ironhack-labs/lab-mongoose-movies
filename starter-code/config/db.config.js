const mongoose    = require('mongoose');
const MONGOBD_URI = 'mongodb://localhost:27017/celebrities';

mongoose.connect(MONGOBD_URI, {useNewUrlParser: true})
  .then(() =>  console.info(`Succesfully connected to the database ${MONGOBD_URI}`) )
  .catch( err => console.error(`An error ocurred trying to connect to the database ${MONGOBD_URI}`, err) );
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/celebritydb', {useMongoClient: true}).then(() => {
  console.log('Mongoose is connected');
}).catch(error =>{
  console.log(error);
});

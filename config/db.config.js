const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lab-mongoose-movies';

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.info(`Successfully connected to ${MONGO_URI}`))
  .catch(error => console.error('An error ocurred trying to connect to database', error));

const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/lab-mongoose-movies', { useMongoClient: true });
require('dotenv').config();

const mongoose = require('mongoose');

const Celebrities = require('../models/Celebrity');

const celebrities = [ ]

mongoose.connect("mongodb://localhost/lab-mongoose-movies", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

  .then(x =>
    Celebrities.insertMany(celebrities)
      .then((celebrities) => {
        console.log("Inserted celebrities");
        mongoose.connection.close();
    })
      .catch((error) => {
        console.log(error);

}));
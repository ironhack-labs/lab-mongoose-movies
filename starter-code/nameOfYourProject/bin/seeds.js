"use strict";

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity'); // get celeb model

// define default data
const celebData = [
    { name: 'CelebA', occupation:"actor", catchPhrase: "Phrase 1" },
    { name: 'CelebB', occupation:"soccer player", catchPhrase: "Phrase 2" },
    { name: 'CelebC', occupation:"singer", catchPhrase: "Phrase 3" }
  ];


// connect to mongo db collection
  mongoose.Promise = Promise;
  mongoose.connect('mongodb://localhost/celeb-movies-db', {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
  });

// apply celebrity data to model
  Celebrity.create(celebData, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((celebObject) => {
      console.log(celebObject.name);
    });
    mongoose.connection.close();
  });
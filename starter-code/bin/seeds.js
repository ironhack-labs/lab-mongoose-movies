const mongoose = require('mongoose');
require("./../app.js") ;
const celebrityModel = require("./../models/celebrity.js")

const celebrities = [
    { name: 'Celebrity 1', occupation: "Rock star", catchPhrase: "catchphrase 1" },
    { name: 'Classical', occupation: "Low-", catchPhrase: "catch 2" },
    { name: 'R&B', occupation: "red", catchPhrase: "catch 3" }
  ];

celebrityModel.create(celebrities)

// mongoose.connection.close()


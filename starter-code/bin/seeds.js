require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const celebrities = [
  {
    name : "Tom Holland",
    occupation: "Actor",
    catchPhrase: "The friendly neighbor"
  },
  {
    name : "Robert Downey",
    occupation: "Actor",
    catchPhrase: "Love you 3000"
  },
  {
    name : "Dua Lipa",
    occupation: "Singer",
    catchPhrase: "Don't start know"
  },

  
];

mongoose
  .connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(async () => {
    const celebritiesArr = await Celebrity.create(celebrities);
    console.log(`${celebritiesArr.length} created successfully`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
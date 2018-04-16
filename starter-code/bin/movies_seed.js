require("dotenv").config();

const mongoose = require("mongoose");
const Movies = require("../models/Movies");
const movies_data = require("./movies_data");
const dbURL = process.env.DBURL;

mongoose
  .connect(dbURL)
  .then(() => {
    Movies.collection.drop();

    Movies.create(movies_data)
      .then(movies => {
        console.log(`DB Created, movies list: ${movies}`);
        mongoose.disconnect()
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err))

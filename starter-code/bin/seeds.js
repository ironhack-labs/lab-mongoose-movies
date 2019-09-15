require("dotenv").config()
const mongoose = require("mongoose");
const celebritiesSeed = require("./seeds/celebrities.seed");
const moviesSeed = require("./seeds/movies.seed");

celebritiesSeed()
  .then(celebritiesSeedCreated => moviesSeed())
  .then(moviesCreated => {
    console.log("Celebrities and movies created successfully!")
    process.exit(0)
  });

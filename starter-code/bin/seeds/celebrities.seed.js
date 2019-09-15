require("dotenv").config()
const mongoose = require ("mongoose")
const Celebrities = require("./../../models/Celebrities");
const celebritiesData = require("./data/celebrities.data");

mongoose
  .connect(`mongodb://localhost/${process.env.DATABASE}`, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const celebritiesSeed = async () => {
  let celebritiesDeleted = await Celebrities.deleteMany()
  let celebritiesCreated = await Celebrities.create(celebritiesData)
}

module.exports = celebritiesSeed

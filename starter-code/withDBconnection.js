const mongoose = require("mongoose");
require("dotenv").config();
const { MongoError } = require("mongodb");

const dbUrl = process.env.DBURL;

const dropIfExists = async Model => {
  try {
    await Model.collection.drop();
  } catch (e) {
    if (e instanceof MongoError) {
      console.log(
        `No se puede borrar la colección ${Model.collection.name}. HA hA.`
      );
    } else {
      throw e;
    }
  }
};

const withDbConnection = async (fn, disconnectEnd = true) => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Connection Ready on ${dbUrl}`);
    await fn();
  } catch (error) {
    console.log("ERROR");
    console.log(error);
  } finally {
    // Disconnect from database
    if (disconnectEnd) {
      await mongoose.disconnect();
      console.log("disconnected");
    }
  }
};

module.exports = {
  withDbConnection,
  dropIfExists
};
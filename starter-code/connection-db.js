require("dotenv").config();

const mongoose = require("mongoose");

const dbUrl = process.env.DBURL;

const Connection = async (fn, disconnectEnd = true) => {
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Connection ready on ${dbUrl}`);
    await fn();
  } catch (error) {
    console.error(error);
  } finally {
    if (disconnectEnd) {
      await mongoose.disconnect();
      console.log("Database disconnected");
    }
  }
};

module.exports = Connection;
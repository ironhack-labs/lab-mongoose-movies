const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.DBURL;

const withDbConnection = async (fn, disconnectEnd = true) => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Connection ready on ${dbUrl}`);
    await fn();
  } catch (error) {
    console.log(error);
  } finally {
    if (disconnectEnd) {
      await mongoose.disconnect();
      console.log("Disconnected");
    }
  }
};

module.exports = withDbConnection;

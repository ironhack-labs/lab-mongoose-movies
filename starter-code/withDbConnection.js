const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.DBURL;

/*
const dropIfExists = (Model) => {
  try... copiar del repo de marc
}
Añadir dropIfExists en celebrity.js y aqui, abajo del todo. Revisar repo Marc
*/
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

module.exports = withDbConnection;
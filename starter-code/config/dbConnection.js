require('dotenv').config()
const mongoose = require("mongoose")

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(
      `You have successfully connected to the DB ${self.connection.name}`
    );
  })
  .catch((error) => {
    console.log(error);
  });
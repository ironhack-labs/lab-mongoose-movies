const mongoose = require("mongoose");

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectDb() {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_URL,
      dbOptions
    );
    console.log("connected to mongo db");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectDb;

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/starter-code", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, // <-- added since we use `.findOneAndUpdate()`; check here for more info: https://mongoosejs.com/docs/api.html#mongoose_Mongoose-connects
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

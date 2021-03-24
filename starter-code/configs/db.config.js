const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/express-movies-dev', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}`);
  })
  .catch((error) => {
    console.log('Failed connection to Mongo DB ===>', error);
  });

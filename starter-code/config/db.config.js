const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/starter-code', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res =>
    console.log(`Connected to Mongo! Database name: "${res.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

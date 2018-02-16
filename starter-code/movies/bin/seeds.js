const mongoose = require(`mongoose`);
mongoose.connect(`mongodb://localhost/movie-db`);
const Celebrity = require(`../models/celebrity`);

const celebrities = [
  {
    name        : "Will Smith",
    occupation  : "Actor",
    catchPhrase : "Welcome to *****"
  },
  {
    name        : "Leo DiCaprio",
    occupation  : "Actor",
    catchPhrase : "I'm king of the world!"
  },
  {
    name        : "Tom Cruise",
    occupation  : "Actor",
    catchPhrase : "Thetans are real."
  },
]

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
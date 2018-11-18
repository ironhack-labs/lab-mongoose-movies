const mongoose = require("mongoose")
// const Celebrity = require("../models/Celebrity")
const celebrities = [
  {
    name: "Lebron James",
    occupation: "Athlete",
    catchPhrase: "Lorem ipsum dolor sit amet consectetur adipisicing eli"
  },
  {
    name: "Edward Norton",
    occupation: "Actor",
    catchPhrase: "Dolor, fugit corporis a eum nesciunt est ipsa"
  },
  {
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "Voluptas provident incidunt facere distinctio"
  }, {
    name: "Michael Jordan",
    occupation: "Athlete",
    catchPhrase: "Eaque, culpa vero voluptatibus voluptates voluptate perspiciatis sed esse earum omnis, ipsam sequi?"
  }
]
mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Celebrity.collection.drop();
  })
  .then(() => {
    return Celebrity.insertMany(celebrities)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
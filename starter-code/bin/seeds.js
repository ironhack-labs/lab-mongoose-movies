const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/lab-mongoose-movies", {
  useNewUrlParser: true
});

const celebrityData = [
  {
    name: "Nicki Minaj",
    occupation: "singer",
    catchphrase: "You could be the king but watch the queen conquer."
  },
  {
    name: "Cardi B",
    occupation: "singer",
    catchphrase: "Knock me down 9 times, but I get up 10."
  },
  {
    name: "Chris Pratt",
    occupation: "actor",
    catchphrase:
      "This is so awesome. We are like Robin Hood. We steal from the club and give to ourselves."
  }
];

Celebrity.insertMany(celebrityData)
  .then(data => {
    console.log(`${data.length} celebrities successfully imported`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log("ERROR: Data could not be imported", err);
  });

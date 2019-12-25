require("dotenv").config();

const mongoose = require("mongoose");
const Celebrities = require("../models/Celebrities");

mongoose
  .connect(
    process.env.DBURL,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected!"));

const celebrities = [
  {
    name: "Cristiano Ronaldo",
    occupation: "Striker",
    catchPhrase:
      "Pienso que por ser guapo, por ser rico, por ser un gran jugador, las personas tienen envidia de mí"
  },
  {
    name: "Lionel Messi",
    occupation: "Striker",
    catchPhrase: "Cambiaría mis cinco balones de oro por un Mundial"
  },
  {
    name: "Gianluigi Buffon",
    occupation: "Goalkeeper",
    catchPhrase: "El árbitro tiene un cubo de basura en lugar de corazón"
  }
];

Celebrities.collection.drop();

Celebrities.create(celebrities)
  .then(celebrities => {
    console.log(`Created ${celebrities.length} celebrities!`);
  })
  .then(() => {
    mongoose.disconnect();
  });

const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity.js")



const dataCelebrities = [
  {
    name:"Robert Downey Jr",
    occupation: "Actor",
    catchPhrase: "I used to be so convinced that happiness was the goal, yet all those years I was chasing after it I was unhappy in the pursuit. Maybe the goal really should be a life that values honor, duty, good work, friends, and family."
  },
  {
    name: "Santiago Ramon y Cajal",
    occupation: "Doctor",
    catchPhrase: "Si hay algo en nosotros verdaderamente divino, es la voluntad. Por ella afirmamos la personalidad, templamos el carácter, desafiamos la adversidad, reconstruimos el cerebro y nos superamos diariamente."
  },
  {
    name: "Nadal Riera",
    occupation: "ironHackStudent",
    catchPhrase: "only two types of people wear sunglasses inside a building, blind people and A-holes"
  },
]

mongoose
  .connect("mongodb://localhost/starter-code",{ useNewUrlParser: true })

  .then(x => {
    console.log(
`Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
.then(() => {
Celebrity.create(dataCelebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${dataCelebrities.length} celebrities`);
})
.then(() => {
  mongoose.disconnect();
})
.catch(err => {
  console.error("Error connecting to mongo", err);
  })
});
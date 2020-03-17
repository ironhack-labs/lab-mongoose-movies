const mongoose = require("mongoose")
const celebrities = require("../models/celebrity");
const dbName = "celebrities";
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

celebrities.collection.drop()

let celebArray = [{
        name: "Amalia",
        occupation: "back-end developer",
        catchphrase: "Hola corazones"
    },
    {
        name: "Julián",
        occupation: "front-end developer",
        catchphrase: "Bienvenidos, maricones"
    },
    {
        name: "Dani",
        occupation: "Ironhack's Lead Teacher",
        catchphrase: "Bueeeeno... Está bieeeen, pero che, podes hacerlo de otra manera"
    }
]

celebrities.create(celebArray, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length}`)
    mongoose.connection.close();
  });
const mongoose = require ("mongoose");
const Celebrity = require("../models/celebrity.Model")

mongoose
  .connect('mongodb://localhost/starter-code', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true}
  );

const celebrities = [
    {
        name: "Rose",
        occupation: "Singer",
        catchphrase: "Catch me if you can" 
    },
    {
        name: "Oliva",
        occupation: "Dancer",
        catchphrase: "Dance Dance Dance" 
    },
    {
        name: "James",
        occupation: "Writer",
        catchphrase: "Hakuna matata" 
    }
]

Celebrity.create(celebrities)
    .then(celebsInDB => {
        console.log(`Created ${celebsInDB.length} celebs!`)
        mongoose.connection.close();})
    .catch(err => console.log(`An error occured: ${err}`));



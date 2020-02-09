const mongoose = require("mongoose");
const celebrities = require("../models/celebrity.model")

const dbName = 'webmad0120-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`)

celebrities.collection.drop()

const celebritiesList = [
  {
    name: "Diego el Cigala",
    occupation: "cantante",
    catchPhrase: "Atrásss!",
  },
  {
    name: "Fernando Tejero",
    occupation: "actor",
    catchPhrase: "Un poquito de por favor"
  },
  {
    name: "Karlos Arguiñano",
    occupation: "cocinero",
    catchPhrase: "Rico, rico y con fundamento"
  }
]

celebrities.create(celebritiesList, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebritiesList.length} celebrities`)
  mongoose.connection.close();
});
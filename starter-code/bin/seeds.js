const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
  name: "Michael Jackson",
  ocupation: "singer",
  catchPhrase: "hellow world"
},

{
  name: "Avicci",
  ocupation: "singer",
  catchPhrase: "I don't know where the trip will end, but I know where to start"
},

{
  name: "Anne Hathaway",
  ocupation: "actress",
  catchPhrase: "Nadie quiere ser el que sale corriendo"
}
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
  
});

/*
Celebrity.create(celebrities)
    .then(all => console.log(`${all.length} created sucessfully`))
    .catch(err => console.log(err))
    */





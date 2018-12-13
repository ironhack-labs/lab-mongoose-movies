const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js")

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`,{useNewUrlParser: true});


const celebrities =[
      {name: "matt damon",
      occupation: "actor",
      catchPhrase: "hello world"}
]



Celebrity.create(celebrities, (err) =>{
 if (err) { throw (err)}
 console.log(`Created ${celebrities.length} celebritries`);
 mongoose.connection.close()
});


require('dotenv').config()
const Celebrity = require ("../models/Celebrity")
const mongoose = require('mongoose');
const dbUrl = process.env.DBURL;
//const withDbConnection = require("../withDbConnection")

//const dbName = "starter-code";
//mongoose.connect(`mongodb://localhost/${dbName}`,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(dbUrl);

const celebrities = [
    {
        name: "Dani Rovira", occupation: "Comedian", catchPhrase:"Er taperwé"
    },
    {
        name: "Heath Ledger", occupation: "Actor", catchPhrase:"Why so serious"
    },
    {
        name: "Chadwick Boseman", occupation: "Actor", catchPhrase:"Wakanda forever"
    }
]
async function seedDb() {
    try {
      await Celebrity.collection.drop(); 
      let celeb = await Celebrity.create(celebrities); 
      console.log(`SUCCESS Adding celebs to DB! ${celeb}`);
    } catch (error) {
      console.log(`ERROR ${error}`);
    }
    mongoose.connection.close();
};
  
seedDb();
// withDbConnection(async() => {
//     await Celebrity.collection.drop();
//     await Celebrity.create(celebrities);
// })
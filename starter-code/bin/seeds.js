const mongoose = require("mongoose");
const Celebrity = require('../models/Celebrity');

const dbName = 'Celebrity_project';
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true});

const celebrities = [{
    name        : "Jacopo",
    occupation   : "Dev",
    catchPhrase : "Creo que si"
}, 
{
    name        : "lluis",
    occupation   : "Master dev",
    catchPhrase : "Igual no"
}, 
{
    name        : "Miguel Angel",
    occupation   : "Tontaco",
    catchPhrase : "Pero Juli a ti te va?"
},
{
    name        : "havaAlimura",
    occupation   : "estoic",
    catchPhrase : "shufu bblabla!"
    
},
{
    name        : "havaAlimura",
    occupation   : "estoic",
    catchPhrase : "shufu bblabla!"
    
},
{
    name        : "havaAlimura",
    occupation   : "estoic",
    catchPhrase : "shufu bblabla!"
    
}

]


Celebrity.create(celebrities, (err) => {
    if (err) {throw(err)}
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });
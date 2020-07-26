const mongoose = require ("mongoose");
const Celebrity = require("../models/celebrity");

const dbtitle = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();

const celebrity = [
    {
        name: "Albert Einstein", 
        occupation: "Scientist", 
        catchPhrase: "I have no special talent. I am only passionately curious",
    },
    {
        name: "Plato", 
       occupation: "Philosopher", 
       catchPhrase: "The greatest wealth is to live content with little",
   },
   {
     name: "Benjamin Franklin", 
     occupation: "Politician", 
    catchPhrase:"Well done is better than well said",
},
]


Celebrity.create(celebrity,(err) =>{
    if (err) { throw (err) }
    console.log (`Created ${celebrity.length} celebrity`)
    mongoose.connection.close();

});
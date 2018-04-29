/*define mongoose and Celebrity model to be able to use them*/
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

//define the data base name and connect it to mongoose
const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

//define some initial documents for your database
const celebrities = [{
        name: "Jennifer Lawrence",
        occupation: "actress",
        catchPhrase: "Where's the pizza"
    },
    {
        name: "Ace Hitter",
        occupation: "rapper",
        catchPhrase: "Arre pues, date, wey"
    },
    {
        name: "La Zowi",
        occupation: "singer",
        catchPhrase: "Ninguna como yo"
    },
    {
        name: "Tomasa del Real",
        occupation: "singer",
        catchPhrase: "Yo soy tu señora"
    }

];

//Create those celebrities using the model, they will be added to mongo db, and display how many docs where created
Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.lenght} celebrities`);
    mongoose.connection.close();
})
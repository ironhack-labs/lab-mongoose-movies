const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');


const dbtitle = 'celebrities-project';
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Celebrity.collection.drop();

const celebrities = [{
        name: "Terminator",
        occupation: "The Terminator",
        catchPhrase: "I'll be back"
    },
    {
        name: "Darth Vader",
        occupation: "The Darth Vader",
        catchPhrase: "I am your Father"
    },
    {
        name: "James Bond",
        occupation: "007",
        catchPhrase: "The name is Bond, James Bond"
    }

]


Celebrity.create(celebrities, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
});

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();

const firstCelebrities = [
    {
        name: "Adrian Monk",
        occupation: "Detective",
        catchPhrase: "It's a gift and a curse"
    },
    {
        name: "Carrie Bradshaw",
        occupation: "Journalist",
        catchPhrase: "I can't help but wonder..."
    },
    {
        name: "Michael Scott",
        occupation: "Salesman",
        catchPhrase: "That's what she said"
    }
];

Celebrity.create(firstCelebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${firstCelebrities.length} celebrities!`)
    mongoose.connection.close();
});
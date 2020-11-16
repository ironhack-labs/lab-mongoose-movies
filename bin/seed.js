const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const dbName = 'celebrity-database';

Celebrity.collection.drop();

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const celebrities = [
    {
        name: "Russel Crowe",
        occupation: "Actor",
        catchPhrase: "My name is Maximus Decimus Meridius, Commander of the Armies of the North, General of the Felix Legions, loyal servant to the true emperor, Marcus Aurelius.Father to a murdered son, husband to a murdered wife.And I will have my vengeance, in this life or the next."

    },
    {
        name: "Christian Bale",
        occupation: "Actor",
        catchPhrase: "It's not who I am underneath, but what I do that defines me."
    },
    {
        name: "Jack Nicholson",
        occupation: "Actor",
        catchPhrase: "When you decide to be something, you can be it. That's what they don't tell you in the church. When I was your age they would say we can become cops, or criminals. Today, what I'm saying to you is this: when you're facing a loaded gun, what's the difference?"
    }
];

Celebrity
    .create(celebrities)
    .then(allCelebritiesCreated => {
        console.log(`Created ${allCelebritiesCreated.length} celebrities`);
        mongoose.connection.close();
    })
    .catch(error => console.log(`Hubo un error: ${error}`));
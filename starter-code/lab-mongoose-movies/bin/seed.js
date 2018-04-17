const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity");


mongoose.Promise = Promise;
mongoose
.connect('mongodb://localhost/mongoose-movies', {useMongoClient: true})
.then(() => {
    console.log('Connected to Mongo!')
}).catch(err => {
    console.error('Error connecting to mongo', err)
});

const celebrity = [
    {
        name: "Speedy Gonzalez",
        occupation: "Cartoon",
        catchPhrase: "¡Ándale! ¡Ándale! ¡Arriba! ¡Arriba! ¡Epa! ¡Epa! ¡Epa! Yeehaw!",
    },
    {
        name: "Slowpoke Rodriguez",
        occupation: "Cartoon",
        catchPhrase: "...",
    },
    {
        name: "Flo Rida",
        occupation: "Rapper",
        catchPhrase: "I see you D. Guetta... let's get 'em!",
    }
]


Celebrity.create(celebrity)
.then(() => {
    console.log(`Created ${celebrity.length} celebrities`)
})
.catch((err) => {
    console.log("Creation Error: ", err)
});


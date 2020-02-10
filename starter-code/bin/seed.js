const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');

const dbName = 'celebrityDb';

const celebArray = [
    {
        name: "Judy Dench",
        occupation: "Actress",
        catchPhrase: "Quality never goes out of style"
    },
    {
        name: "Helen Mirren",
        occupation: "Actress",
        catchPhrase: "Experience and common sense, and don't look back"
    },
    {
        name: "Sofia Helin",
        occupation: "Actress",
        catchPhrase: "Scandinavian noir series come from the heart of Scandinavia"
    }
];

// ESTABLISH CONNECTION TO MONGO
mongoose.connect('mongodb://localhost/celebrityDb', {useNewUrlParser: true})
.then(() => {

    // Create celebrities objects - this returns a promise
    const promCeleb = Celebrity.create(celebArray)
    return promCeleb; //forward the pending promise to the next 'then'
})
//the array of celebrities has been created and is forwarded from the previous 'then'
.then((createdCelebrities) => {
    console.log(`Number of celebrities: ${createdCelebrities.length}`);

    //CLOSE THE CONNECTION
    const pr = mongoose.connection.close();
    return pr
})
.then(()=> console.log('Connection closed')) 

.catch( (err) => console.error('Error connecting to mongo', err))
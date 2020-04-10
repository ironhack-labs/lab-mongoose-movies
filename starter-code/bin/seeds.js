const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const celebrities = [
    {
        name: "Rodolfo Langostino",
        occupation: "TV prawn",
        catchPhrase: "Pibe, lleváme a casa"
    },
    {
        name: "Quentin Tarantino",
        occupation: "Movie director",
        catchPhrase: "Violence is one of the most fun things to watch"
    },
    {
        name: "Leo Messi",
        occupation: "Football GOAT",
        catchPhrase: "I miss Luís Suárez a lot"
    }
];

const dbName = "celebrities";

// SEED SEQUENCE

// 1. ESTABLISH CONNECTION TO MONGO
mongoose
    .connect(`mongodb://localhost/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
    
        // 2. CREATE CELEBRITIES FROM THE ARRAY
        const promise = Celebrity.create(celebrities);
        return promise; // Forward the pending promise to the next 'then()'
    })
    .then((newCelebrities) => {
        console.log(`Created ${newCelebrities.length} new celebrities`);

        // 3. CLOSE THE DB CONNECTION
        const promise = mongoose.connection.close();
        return promise;
    })
    .then(() => console.log('Connection closed!') )
    .catch( (err) => console.error('Error connecting to mongo', err));

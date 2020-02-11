const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbName = "celebrities";

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

// SEED SEQUENCE

// 1. ESTABLISH CONNECTION TO MONGO
mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    // 2. CREATE DOCUMENTS FROM THE ARRAY OF books
    const pr = Celebrity.create(celebrities);
    return pr; // Forward the pending promise to the next `then()`
  })
  .then(createdCelebrities => {
    console.log(`Created ${createdCelebrities.length} celebrities`);

    // 3. CLOSE THE DB CONNECTION
    const pr = mongoose.connection.close();
    return pr;
  })
  .then(() => console.log("Connection closed!"))
  .catch(err => console.error("Error connecting to mongo", err));
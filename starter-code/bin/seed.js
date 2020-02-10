'use strict';

const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbCelebrities = "celebrities";

// Create an array of 3 objects, each with name, occupation and catchPhrase
// for our initial celebrities.

const celebritiesArr = [
  {
    name: "Juan Marisco",
    occupation: "Comedian",
    catchPhrase: "Let's put a smile in that face"
  },
  {
    name: "Michael Nunchackson",
    occupation: "Ninja",
    catchPhrase: "Barman is a pussy"
  },
  {
    name: "Enrico Stronzone",
    occupation: "Politician",
    catchPhrase: "I will not let you down, this time"
  }
];

mongoose
  .connect(`mongodb://localhost:27017/${dbCelebrities}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    // 2. CREATE DOCUMENTS FROM THE ARRAY OF books
    const pr = Celebrity.create(celebritiesArr);
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

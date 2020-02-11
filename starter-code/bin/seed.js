const mongoose = require("mongoose");
const Celebrity = require("./../models/Celebrity");

const celebrities = [
    {
        name: "Chuck Norris",
        occupation: "Badass",
        catchPhrase: "All the jokes are true" 
    },
    {
        name: "Samuel L Jackson",
        occupation: "Jedi",
        catchPhrase: "Mother..." 
    },
    {
        name: "Uros",
        occupation: "teacher supreme",
        catchPhrase: "let's say... Bob" 
    },
];

// SEED SEQUENCE

// 1. ESTABLISH CONNECTION
mongoose
  .connect(`mongodb://localhost/celebrity`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then (() => {
      // 2. CREATE DOCUMENTS FROM THE ARRAY OF celebrities
      const pr = Celebrity.create(celebrities);
      return pr;
  })
  .then(createdCelebrity => {
      console.log(`Created ${createdCelebrity.length} celebrity files`);

  // 3. CLOSE THE DB CONNECTION
    const pr = mongoose.connection.close();
    return pr;
})
.then(() => console.log("Connection closed!"))
.catch(err => console.error("Error connecting to mongo", err))
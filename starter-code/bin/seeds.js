require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const seed = [
       {
            name: "Robert De Niro",
            occupation: ["actor"],
            catchPhrase: "Are you talking to me" 
        },
        {
            name: "Porky",
            occupation: ["cartoon"],
            catchPhrase: "Eso es todo amiguitos." 
        },
        {
          name: "Ed Norton",
          occupation: ["actor"],
          catchPhrase: "First rule of fight club is ... " 
      }
]

mongoose
  .connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(async () => {
    const celebrity = await Celebrity.insertMany(seed);
    console.log(`${celebrity.length} created successfully`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const seed = [
       {
            name: "Rocki",
            occupation: ["Matador", "actor"],
            catchPhrase: "tun tun tun tun tuuuuun" 
        },
        {
            name: "Matilda",
            occupation: ["bruja", "actriz"],
            catchPhrase: "bruce bruce bruceeee" 
        },
        {
          name: "Hhiman",
          occupation: ["meme", "actor"],
          catchPhrase: "recuerden amiguitos" 
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

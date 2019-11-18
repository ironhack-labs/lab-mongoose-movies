require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const seed = [
       {
            name : "Rocki",
            occupation : ["Matador", "actor"],
            cathPhrase : "tun tun tun tun tuuuuun" 
        },
        {
            name : "Matilda",
            occupation : ["bruja", "actriz"],
            cathPhrase : "bruce bruce bruceeee" 
        },
        {
          name : "Hhiman",
          occupation : ["meme", "actor"],
          cathPhrase : "recuerden amiguitos" 
      }
]

mongoose
  .connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(async () => {
    const celebrity = await Celebrity.create(lascelebrity);
    console.log(`${celebrity.length} created successfully`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

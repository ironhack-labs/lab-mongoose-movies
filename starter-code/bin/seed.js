const mongoose  = require("mongoose");
const Celebrity = require("../models/Celebrity.model");
require("../config/db.config")

const data = [
  {
    name: "Elon Musk",
    occupation: "Entrepeneur",
    catchPhrase:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    name: "Jeff Bezos",
    occupation: "Entrepeneur",
    catchPhrase:
      "If you double the number of experiments you do per year you're going to double your inventiveness.",
  },
  {
    name:"Robert Downey Jr",
    occupation:"Actor",
    catchPhrase:
      "Worrying is like praying for something that you dont want to happen.",
  },
];

Celebrity.deleteMany()
    .then(() =>{
        Celebrity
            .create(data)
                .then((celebrities) => console.log(`Created: ${celebrities}`))
                .finally(() => {
                    mongoose.connection.close()
                    .then(() => console.log("Disconected"))
                })
            
    })


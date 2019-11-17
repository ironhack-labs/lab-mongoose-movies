const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrities");

mongoose
  .connect("mongodb://localhost/movies", { useNewUrlParser: true })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error("Error connecting to mongo", err));

Celebrity.deleteMany()
.then(()=>{
  const celebrities = [
    {
      name: "Johny Deep",
      ocupation: "Actor",
      catchPhrase: "You can close your eyes to the things you don't want to see, but you can't close your heart to the things you don't want to feel.",
    },
    {
      name: "Michael Jackson",
      ocupation: "King of Pop",
      catchPhrase: "In a world filled with hate, we must still dare to hope. In a world filled with anger, we must still dare to comfort. In a world filled with despair, we must still dare to dream. And in a world filled with distrust, we must still dare to believe.",
    },
    {
      name: "Scarlett Johansson",
      ocupation: "Actress",
      catchPhrase: "I'm very independent. I can look after myself but I still need a lot of love and care.",
    },
    {
      name: "Lebron James",
      ocupation: "Basketball Player",
      catchPhrase: "Ask me to steal, block out, sacrifice, lead, dominate. Anything. But it’s not what you ask of me, it’s what I ask of myself.",
    },
    {
      name: "Rosalía",
      ocupation: "Singer",
      catchPhrase: "A ningún hombre consiento que dicte mi sentencia",
    },
  ];
  
  Celebrity.insertMany(celebrities)

})


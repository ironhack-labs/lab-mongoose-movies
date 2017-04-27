const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect("mongodb://localhost:27017/celebrities");

let celebrities = [
  {
    name: "Johnny Depp",
    occupation: "actor",
    catchPhrase: "Where's the rum gone!?",
  },
  {
    name: "Manny Pacquiao",
    occupation: "boxer/homophobic senator",
    catchPhrase: "I punch better than I legislate",
  },
  {
    name: "Elon Musk",
    occupation: "real-life Tony Stark",
    catchPhrase: "Initiate beast mode",
  },
]


Celebrity.create(celebrities, (err, docs)=>{
  if(err) { throw err}
  docs.forEach((celebrity) => {
    console.log(celebrity.name);
})


mongoose.connection.close();

});

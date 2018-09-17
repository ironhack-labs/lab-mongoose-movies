const mongoose = require('mongoose');
const Celebrity = require ('../models/Celebrity');

const dbName = 'lab-mongose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Selena Gomez",
    occupation: "Singer",
    catchPhrase: "Success is nothing if you don't have the right people to share it with; you're just gonna end up lonely."
  },
  {
    name: "Cristiano Ronaldo",
    occupation: "Soccer player",
    catchPhrase: "I’m living a dream I never want to wake up from."
  },
  {
    name:"Ariana Grande",
    occupation:"Singer",
    catchPhrase:"Nothing to prove and I'm bulletproof and know what I'm doing."
  },
  {
    name:"Beyoncé",
    occupation:"Singer",
    catchPhrase:"If everything was perfect, you would never learn and you would never grow."
  },
  {
    name:"Kim Kardashian",
    occupation:"Unknown",
    catchPhrase:"I want to be a vampire ... I would die to be in Twilight, being around all those hot guys."
  },
  {
    name:"Taylor Swift",
    occupation:"Singer",
    catchPhrase:"This is a new year. A new beginning. And things will change."
  },
  {
    name:"Kylie Jenner",
    occupation:"Model",
    catchPhrase:"I like to have fun, I'm silly, and I keep the mood light. "
  },
  {
    name:"Dwayne 'The Rock' Johnson",
    occupation:"Actor",
    catchPhrase:"With drive and a bit of talent you can move mountains."
  }
]

Celebrity.create(celebrities,(err)=>{
  if(err){ throw(err)}
  console.log(`Creadas ${celebrities.length} celebridades`)
  mongoose.connection.close()
});
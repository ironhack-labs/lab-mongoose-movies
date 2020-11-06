const express = require('express');
const app = express();


const Celebrity = require('../models/Celebrity.model')

const celebrities = [
  {
    name: 'brad pitt',
    ocupation: 'actor',
    catchPhrase: "A family is a risky venture, because the greater the love, the greater the loss... That's the trade-off. But I'll take it all"
  },
  {
    name: 'julia roberts',
    ocupation: 'actor',
    catchPhrase: "You know it’s love when all you want is that person to be happy, even if you’re not part of their happiness."

  },
  {
    name: 'meryl streep',
    ocupation: 'actor',
    catchPhrase: "Integrate what you believe in every single area of your life."

  },
];


Celebrity.insertMany(celebrities);

app.get("/celebrity/create", (req, res) => {
  res.render("celebrity/create")
})
//Recibir la informacion para crear un celebry
app.post("/celebrity/create", async (req, res) => {
  const { name, ocupation, catchPhrase } = req.body
  await Celebrity.create({ name, ocupation, catchPhrase })
  res.redirect("/")
})
// Call the Celebrity model's create method with the array as argument.

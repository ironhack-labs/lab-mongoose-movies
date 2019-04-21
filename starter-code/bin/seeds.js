require('dotenv').config()

const mongoose  = require('mongoose')
const Celebrity = require('../models/Celebrity')

mongoose.connect(process.env.DB)

const celebrities = [
  {name: "Elon Musk",ocupation:"Entrepreneur",catchPhrase:"When something is important enough, you do it even if the odds are not in your favor."},
  {name: "Marco Antonio Regil",ocupation:"Television Host",catchPhrase:"Aprendamos juntos"},
  {name: "Franco Escamilla",ocupation:"Comedian",catchPhrase:"Se mamo"}
]

Celebrity.create(celebrities)
  .then(celebrities=>{
    console.log(`Created ${celebrities.length} celebrities successfully`);
    mongoose.connection.close()
  })
  .catch(err=>{
    console.log(err)
  })
const mongoose     = require('mongoose');
const Celeb = require("../models/celebrity.js");

mongoose.connect('mongodb://localhost/famousApp')
  .then(() => {
    Celeb.insertMany(celebrities)
  })
  .catch(() => {
    console.error('Error connecting to mongo', err);
  })

  const celebrities = [
    {
      name: "Macaulay Culkin",
      occupation: "Actor",
      catchPhrase: "Come into my house and you are a dead man"
    },
    {
      name: "Kim Kardashian",
      occupation: "Unknow",
      catchPhrase: "kick-ass"
    },
    {
      name: "Leonardo Dantes",
      occupation: "Singer",
      catchPhrase: "Have a thousand names, the male member"
    }
  ]
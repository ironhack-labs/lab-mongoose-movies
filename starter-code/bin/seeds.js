const mongoose = require ("mongoose")
const Celebrities = require ("../models/celebrity")

const famousPeople =[{
  name: "Alfonso Martínez (Sito)",
  occupation: "Ironhack TA",
  catchPhrase: "BOOOM"
},{
  name: "Rafaella Carrá",
  occupation: "Cantante",
  catchPhrase: " A Far L'amore Comincia Tu"
},{
  name: "Raluca Dana",
  occupation: "Ironhack TA",
  catchPhrase: "Esta botella de Jager me va a durar un asalto"
}]

mongoose
  .connect('mongodb://localhost/FamousPeople', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Celebrities.insertMany(famousPeople)

    .then((data) =>{
        console.log(data);
        mongoose.disconnect()
        console.log("chachi")
    }).catch((err)=>{
        console.log(err)
    })
})
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
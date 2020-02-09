require('dotenv').config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const celebrities=[{
  name: "Los pistoleros del eclipse",
  occupation:"Fiesta",
  catchPhrase:"La pistola cuando se saca es pa disparar, el que la saca para enseñarla es un parguela",
 
},
{
  name: "Ramon",
  occupation:"Vanidoso",
  catchPhrase:"Hay cinco derechos universales que son innegables al hombre: uno es la vivienda, otro es la ropa, otro es la dignidad y los otros dos se me han olvidado",  
},
{
  name: "La socorrista",
  occupation:"Quimica",
  catchPhrase:"Me he equivocado de producto y… he echado…. ácido clorhidri… sí… ácido clorhídrico encima de sulfato de so… de cloro … no, sulfato no, no sé lo que era.. lo he echado sabes y ha hecho una reacción que flipas y ha empezado a salir gas amarillo (…) que vamos, que la he liao parda", 
}
]


mongoose
.connect("mongodb://localhost/movies", { useNewUrlParser: true, useUnifiedTopology: true })
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);  
  Celebrity.deleteMany()
  .then(() => {
    return Celebrity.insertMany(celebrities);
  })
  .then(() => {
    console.log("succesfully added all the data");
    mongoose.connection.close();
    process.exit(0);
  });
})
.catch(err => {
  console.error("Error connecting to mongo", err);
});
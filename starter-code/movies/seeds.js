const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/celebritys");
const Celebrity = require("./models/Celebrity");

const celebridadess=[
    {
    name:"Octavio Paz ",
    occupation:"Escritor",
    catchPhrase:"La libertad no necesita alas, lo que necesita es echar raíces"
},{
    name:"Benito Juárez",
    occupation:"Presidente",
    catchPhrase:"Aquel que no espera vencer, ya está vencido"
},{
    name:"Mario Moreno, Cantinflas ",
    occupation:"Actor",
    catchPhrase:"La primer obligación de todo ser humano es ser feliz, la segunda es hacer feliz a los demás"
}];

Celebrity.collection.drop();

Celebrity.create(celebridadess,(err,result)=>{
    if(err)console.log("Nel");
    console.log("lo lograste", result);
   // mongoose.connection.close();
});

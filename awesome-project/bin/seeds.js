require("dotenv").config();

const mongoose = require("mongoose"); // Importar mongoose
const Celebrity = require("../models/Celebrity") // Importar modelo Celebritu
const celebrities_data = require ('./celebrity_data.js'); // Importar base de datos de los celebrities

 const dbURL = process.env.DBURL;
  mongoose.connect(dbURL).then(()=>{
     console.log(`Connected to db ${dbURL}`);

   })

celebrities_data.forEach(celebrity_data => {
    console.log(celebrity_data);
      let celebrity = new Celebrity({
        name: celebrity_data.name,
        occupation: celebrity_data.occupation,
        catchPhrase: celebrity_data.catchPhrase
    })
    
    .save()
    .then(()=> console.log("Created celebities"))
})
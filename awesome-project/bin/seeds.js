require("dotenv").config();

const mongoose = require("mongoose"); // Importar mongoose
const Celebrity = require("../models/Celebrity") // Importar modelo Celebritu
const celebrities_data = require ('./celebrity_data.js'); // Importar base de datos de los celebrities

const dbURL = process.env.DBURL;


mongoose.connect(dbURL).then(()=>{
     console.log(`Connected to db ${dbURL}`);
     Celebrity.collection.drop(); // porque hay que poner la funcion drop

    Celebrity.create(celebrities_data)
      .then(celebrity=>{
        console.log(celebrity);
        console.log("Created celebities");
        mongoose.disconnect();
      })

   })
  .catch((err) => {
        console.log(err)
      });

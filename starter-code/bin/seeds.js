const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')

const dbName = 'Celebrity'
mongoose.connect(`mongodb://localhost/${dbName}`, { useUnifiedTopology: true,  useNewUrlParser: true  })

const celebrities =[
    { name: "Pulpo Paul", occupation: "Visionary", catchPhrase: "Glub, glub" },
    { name: "Antonio De la Torre", occupation: "Actor", catchPhrase: "La felicidad es un yoyó, tan pronto sube como baja." },
    { name: "Diego", occupation: "Teacher Assistant", catchPhrase: "Reutiliza las funciones" }
  ];

  Celebrity.create(celebrities, (err) => {
      if(err) { throw(err) }
      console.log(`Created ${celebrities.length} celebrities`)
      mongoose.connection.close();
  });
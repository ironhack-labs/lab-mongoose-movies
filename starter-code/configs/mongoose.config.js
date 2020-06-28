const mongoose = require('mongoose')

// Process.env hace referencia a la carpeta .env, son variables de entorno para que no se suban a github. Es como una variable
// EJ: process.env.DB_LOCAL es igual a "mongodb://localhost/celebrity-lab"
mongoose
    .connect(process.env.DB_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

module.exports = mongoose
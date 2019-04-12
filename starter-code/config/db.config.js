const mongoose = require('mongoose');

//conexión a mongoose porque nos conectamos a una bbdd que estamos creando nosotros los datos (no API)
const MONGODB_URI = 'mongodb://localhost:27017/starter-code'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
 .then(() => console.info(`Successfully connected to the database: ${MONGODB_URI}`))
 .catch(() => console.error(`An error ocurred trying to connect to the database: ${MONGODB_URI}`))
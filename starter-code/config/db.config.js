const mongoose = require('mongoose')

const MONGO_URI = 'mongodb://localhost:27017/starter-code'

mongoose.connect(MONGO_URI, { useNewUrlParser:true })
  .then( () => console.log(`Successfully connected to database ${MONGO_URI}`))
  .catch( error => console.error(`Error occured when connecting to database ${MONGO_URI}`))

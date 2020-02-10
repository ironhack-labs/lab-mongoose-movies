const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = "movieDb"; //movieDb

const celebrities = [
  {
    name: 'AABB',
    occupation: 'nothing',
    catchPhrase: 'unrelevant'
  },
  {
    name: 'CCDD',
    occupation: 'busy',
    catchPhrase: 'goodtoknow'
  },
  {
    name: 'EEFF',
    occupation: 'overloaded',
    catchPhrase: 'betternottoknow'
  },
];

// SEED SEQUENCE

// 1. ESTABLISH CONNECTION TO MONGO
mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    // 2. CREATE DOCUMENTS FROM THE ARRAY OF books
  const pr = Celebrity.create(celebrities);
  return pr;      // Forward the pending promise to the next `then()`
  })
  .then(createdCelebrities =>{
    console.log(`${createdCelebrities.length} have been created`);
    
    // 3. CLOSE THE DB CONNECTION
    const pr = mongoose.connection.close();
    return pr;
  })
  .then(()=> console.log('Connection closed'))
  .catch(err => console.log("Error connecting to mongo", err));


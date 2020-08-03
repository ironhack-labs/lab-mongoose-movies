const mongoose = require('mongoose');
const  celebModel= require('../models/celebrity');
const movieModel = require('../models/movie');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const Celebrities=[
    {name: "Homer Simpson", occupation: "Nuclear plant operator", catchPhrase: `D'oh!`},
    {name: "Leroy Jenkins", occupation: "AFK", catchPhrase: `LEROOOOY JENKINS`},
    {name: "Julius Caesar", occupation: "Politician", catchPhrase: `Alea Jacta Est`}
]

celebModel.insertMany(Celebrities)
    .then(()=> console.log(`Database updated.`))
        .then(()=>{
            mongoose.connection.close()
                .then(()=>{console.log ('Connection closed')})
                .catch(() => (`Failed to close the connection to the database`))
        })
        .catch(()=> console.log (`Failed to update database. Insert promise rejected.`)) 
        
const Movies=[
  {title: "Gattaca", plot: "Identity thief commits insurance fraud", genre: `Sci-Fi`},
  {title: "Mononoke Hime", plot: "Giant boar with hygiene issues attacks Ainu village", genre: `Fantasy`},
  {title: "Star Wars", plot: "Son destroys his father's life work", genre: `Space opera`}
]

movieModel.insertMany(Movies)
  .then(()=> console.log(`Database updated.`))
      .then(()=>{
          mongoose.connection.close()
              .then(()=>{console.log ('Connection closed')})
              .catch(() => (`Failed to close the connection to the database`))
      })
      .catch(()=> console.log (`Failed to update database. Insert promise rejected.`)) 




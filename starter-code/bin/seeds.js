const mongoose = require('mongoose');
const CelebrityModel= require('../models/Celebrity');

mongoose.connect('mongodb://localhost/celebrity');

const myCelebrities = [{
  name: 'Shakira',
  occupation: 'singer',
  catchPhrase: 'loca con mi tigre'
 },
 {
  name: 'Murakami' ,
  occupation: 'escritor',
  catchPhrase: 'Lo que sea que estas buscando no va a llegar en a forma en que lo esperas'

 },
 {
  name: 'Darda Rojana',
  occupation: 'perra malcriada',
  catchPhrase: 'wau wau'
 }
]


CelebrityModel
.create(myCelebrities)
.then(data => {
  console.log(data)
  mongoose.connection.close(() => console.log('Connection Closed'))
})
.catch(err => console.log(err))
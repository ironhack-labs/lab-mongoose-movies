let mongoose = require('mongoose')
const CelebrityModel = require('../models/celebrity.model')
require('../config/db.config')

CelebrityModel.insertMany([
      {name:'imran',occupation:'student',catchPhrase:'catch me if you can'},
      {name:'Ross',occupation:'developer',catchPhrase:'im tiered'},
      {name:'lovro',occupation:'ceo',catchPhrase:'im lovro'}

])
.then((res)=>{
      console.log('data inserted',res)
      mongoose.connection.close()  
})

.catch(()=>{
      console.log('error')
})
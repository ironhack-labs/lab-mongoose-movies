let mongoose = require('mongoose')
const MoviesModel = require('../models/movies.model')
require('../config/db.config')

MoviesModel.insertMany([
      {title:'godzilla',genre:'action',plot:'big monster dies'},
      {title:'avengers',genre:'action',plot:'stupidity'},
      {title:'dumb and dumber',genre:'comedy',plot:'fun'}

])
.then((res)=>{
      console.log('data inserted',res)
      mongoose.connection.close()  
})

.catch(()=>{
      console.log('error')
})
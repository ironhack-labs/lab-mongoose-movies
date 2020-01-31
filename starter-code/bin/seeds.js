const mongoose=require('mongoose')

const Celeb=require('../models/celebrity')

const celebData=[{},{},{}]

mongoose
.connect('mongodb://localhost/movieMongoose',{useCreateIndex:true,useUnifiedTopology:true})
.then( async x=>{
    console.log('Connected to Mongo!')
    await Celeb.create(celebData)
                .then(success=>console.log('Celebrities imported to DB'))
                .catch(err=>console.log('Error importing data'))
    await mongoose.connection.close()
    console.log('Connection closed')
})
.catch(err=> console.log('Error conecting to  Mongo'))


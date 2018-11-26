const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const dbName = 'celebritys'
mongoose.connect(`mongodb://localhost/${dbName}`)


const Celebritys = [
{
  'name':'Charlie Sheen',
  'occupation': 'actor',
  'catchPhrase': 'Im tired of ignoring that I march to a different beat'

},
{
  'name':'Steven Tyler',
  'occupation': 'singer',
  'catchPhrase': 'If you dont have a dream, there is no way to make one come true.'
},
{
  'name':'6ix9ine',
  'occupation': 'unknown',
  'catchPhrase': 'the FBI scares me'
}

]

Celebrity.create(Celebritys)
  .then(celebrity =>{
    console.log(`${celebrity.length} celebrity created`)
    mongoose.connection.close()
  })
  .catch(err=>{
    console.log('something went wrong')
  })
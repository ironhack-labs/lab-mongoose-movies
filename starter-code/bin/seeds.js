//Datos de prueba para poder montar la aplicación o web al final en Real no se utilizan las seeds.js 

const moongose = require ('mongoose')
moongose.connect('mongodb://localhost/celebrities')

const Celebrity = require ('../models/celebrity')

const celebrities = [
  {
    name: 'Michael Jackson',
    occupation: 'King of Pop',
    catchPhrase: 'Auuuuuu!',
  },
  {
    name: 'Freddie Mercury',
    occupation: 'Queen',
    catchPhrase: 'Show must go on!',
  },
  {
    name: 'Elvis Presley',
    occupation: 'King of Rock and Roll',
    catchPhrase: 'Mississipi',
  },
  {
    name: 'Bob Marley',
    occupation: 'Reegae master',
    catchPhrase: 'Weeeeee',
  },
 ];

 Celebrity.insertMany (celebrities)
  .then (() => {
    console.log('Database imported')
    moongose.disconnect()
  })
  .catch( error => {
    console.log(error)
  })
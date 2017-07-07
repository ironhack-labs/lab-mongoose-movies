const Celebrity = require('../models/celebrity.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebrities').then(()=> {
  let celebrities = [
    {
      name: 'Salvatore',
      occupation: 'Student & ad actor',
      catchPhrase: 'Me puedes llamar salvo o salva... pero nunca Salvatore'
    },
    {
      name: 'Daniel',
      occupation: 'Partipante en IronHack',
      catchPhrase: 'inshi pendejo!!!! weyyy!!!!!!'
    },
    {
      name: 'Ferndanda',
      occupation: 'TA',
      catchPhrase: 'Hola ... me puedes ayudar porfavor!!!'
    }
  ];
  Celebrity.create(celebrities, (err, obj)=>{
    if(err){
      console.log(err);
    }else{
      obj.forEach((celebrities) =>{
        console.log(`${celebrities.name} // ${celebrities.occupation} // ${celebrities.catchPhrase}`);
      });
    }
  });
});

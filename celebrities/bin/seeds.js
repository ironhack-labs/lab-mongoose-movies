const Celebrity = require('../models/celebrity.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebrities').then(()=> {
  let celebrities = [
    {
      name: 'Samuel',
      occupation: 'Student & ad actor',
      catchPhrase: 'Hay que prepararnos con habilidades digitales',
    },
    {
      name: 'Daniele',
      occupation: 'Partipante en actuando por una pizza',
      catchPhrase: 'Si, si, si es connect porque...',
    },
    {
      name: 'Miguel',
      occupation: 'Teacher actor',
      catchPhrase: 'Holliiiii',
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

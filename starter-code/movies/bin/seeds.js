const Celebrity= require('../models/Celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies-dev')
  .then(() => {
    let celebrities = [
      { celebrityName: 'John', occupation: 'John', catchPhrase: 'John' },
      { celebrityName: 'Mike', occupation: 'John', catchPhrase: 'John' },
      { celebrityName: 'Luis', occupation: 'John', catchPhrase: 'John' },
    ];
    let celebrityObj = drones.map( e => new Celebrity(e));

    celebrityObj.forEach( e => e.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New Celebrity created [${obj.celebrityName}] with ID:${obj._id}`);
        // if(drones.length - 1 == e){
        //   console.log("ended connection");
        //   mongoose.connection.close();
        // }
      }
    }));
  });


// 3 Requerimos o llamamos al al modelo dandole la ruta donde lo creamos
const Celebrity = require('../models/Celebrity.model');



// ESTO NO SE PARA QUE ES
const dbName = 'movies-project-0719';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

// 4 .  Creamos un array con nuestros objetos dentro, los elementos deben tener el mismo nombre
// que en el modelo y el valor debe ser del mismo tipo que especificamos, en este caso strings
const cels = [
  {
    name : 'Clint Eastwood',
    ocupation: 'actor',
    catchPhrase:'¿Algo que objetar?'
  },

  {
    name : 'Arnold Schwarzenegger',
    ocupation: 'actor',
    catchPhrase:'Volveré'
  },

  {
    name : 'Scarlett Johansson',
    ocupation: 'super heroina',
    catchPhrase:'no me toques las narices'
  }

]

// 5 creamos un metodo para para crear el array con el objeto en la base de datos

// tenemos que llamarlo como la constante que creamos abajo del modelo

// al metodo create le pasamos como primer argumento el arrat cels y como segundo parametro una
//funcion con el if
Celebrity.create(cels, (err) => {
  if (err) { throw (err) }
  // hasta aqui el segundo argumento

  // y desde aqui lo que hara el metodo create que es crear el array en la base de datos y devolver
  // un mensaje por consola que nos dirá que se ha creado el array y lo mostrara
  console.log(`Created ${cels.length} cels`)
  mongoose.connection.close();
});


////////////////////   PASO 6 EN CELEBRITY.ROUTES.JS


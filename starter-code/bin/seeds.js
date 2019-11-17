//Requerir base de datos y modelo
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

//conectar con Mongo Compass/db
const dbName = 'Labs-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);


//borra todos los datos
Celebrity.collection.drop();


//colección de datos a insertar
const celebrity = [{
    name: "Homer Simpson",
    occupation: "Inspector de seguridad",
    catchPhrase: "¡Me aburro!",
},
{
    name: "Marge Simpson",
    occupation: "Ama de casa",
    catchPhrase: "Pero hija, ¿para que quieres un pony? Ya tienes un limonero, y ni siquiera juegas con él...",
},
{
    name: "Maggie Simpson",
    occupation: "Bebé",
    catchPhrase: "Chup Chup",
}]


//crear datos
Celebrity.create(celebrity, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${celebrity.length} celebrities`)
    mongoose.connection.close();
})


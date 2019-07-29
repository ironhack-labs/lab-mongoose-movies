//1 . creamos el archivo .env donde ponemos el numero del puerto del servidor

// 2.  aqui decimos lo que vas a ser (un strinng, un numero...) cada uno de los campos (elementos) 
//de nuestro modelo y el nombvre del campo (nombre del elemento)

// aqui requerimos el paquete monggose
const mongoose = require("mongoose")

// y esto no se que significa SUPONGO  que es para crear instabciar la clase Schema con un modelo
// creamos luego que lo llamamos userSchema donde ira dentro nestro modelo
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  ocupation: String,
  catchPhrase: String


  // LO DE TIMESTAMPS NO SE PARA QUE ES******************************************************
}, { timestamps: true });




// ESTO NO SE PARA QUE ES***********************************************************************
const Celebrity = mongoose.model("Celebrity", userSchema)



module.exports = Celebrity

// el 3 está en el archivo seeds
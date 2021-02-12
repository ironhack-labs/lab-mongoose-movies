const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      match:[/^\S+@\S+\.\S+$/,"Porfavor usa un mail valido"] ///validacion [expresion regular -> evaluar un string para ver si tioene ono cierto caracter, mensaje] 
    },        ///regex evalua que este conjunte se valide con el string
    
      passwordHash:{
        type:String,
        required:[true, "Password is required"]
      }
    },
  {
    timestamps: true ///segundo argumento
  }
  
  );

module.exports = model('User', userSchema);

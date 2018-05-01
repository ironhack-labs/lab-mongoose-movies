const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
{
    name:"Luis Miguel",
    occupation: "Dios",
    catchPhrase: "como dishe?"
},
{
    name: "Carmen Salinas",
    occupation: "nana de novelas",
    catchPhrase: "quitate imbecil"
},
{
    name:"El bombon asesino",
    occupation: "cantante actriz",
    catchPhrase: "estuvo feo eso del tsurimi"
}
];


Celebrity.create(celebrities,(err)=>{
    if (err) {throw (err)}
    console.log(`created ${celebrities.lenght}celebrities`)
    mongoose.connection.close();
});
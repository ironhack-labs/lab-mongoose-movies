const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')


const dbtitle = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${dbtitle}`);


const movies = [
  {
    title: "Burning Down America" ,
    genre: "Reality TV" ,
    plot: "No one really knows"
},
{
  title: "Burning Down Mexico" ,
  genre: "Reality TV" ,
  plot: "No one really knows"
},
{
  title: "Burning Down Brazil" ,
  genre: "Reality TV" ,
  plot: "No one really knows"
}
]

Movie.create(movies, (err)=>{
  if (err){throw (err)}
  console.log("Sí funciona esa otra cosa, creo")
})


/* const celebrities = [
  {
    name: "Darth Vader" ,
    occupation: "CEO at Death Star Inc." ,
    catchPhrase: "I am your father"
},
{
  name: "Donald Trump",
  occupation: "Best-selling author",
  catchPhrase: "Build the wall"
},
{
  name:  "Niño de Gerber",
  occupation: "Bebé famoso",
  catchPhrase: "No habla todavía"
}
]

Celebrity.create(celebrities, (err)=>{
  if (err){throw (err)}
  console.log("Sí funciona la cosa esa")
})
 */
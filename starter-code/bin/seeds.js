const celebritys = require("../models/celebrity");
const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/starter-code`);

const seed = [
  {
    name:"Bruno Mars",
    occupation:"Singer",
    catchPhrase:"SeiLa"
  },
  {
    name:"Adele",
    occupation:"Singer",
    catchPhrase:"Skyfall"
  },
  {
    name:"21 Savage",
    occupation:"Singer",
    catchPhrase:"Hearth"
  }
];

celebritys.create(seed).then((e)=>console.log(e)).catch((e)=>console.log(e));
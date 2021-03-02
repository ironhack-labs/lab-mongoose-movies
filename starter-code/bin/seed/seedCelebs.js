require("dotenv").config();
require("../../app"); 
const Celebrity = require("../../models/celebrity"); 

const celebs = [
  {
    name: "Bob",
    occupation: "actor",
    catchPhrase: "sup",
},
{
    name: "Bill",
    occupation: "dancer",
    catchPhrase: "yo",
},
{
    name: "Ben",
    occupation: "singer",
    catchPhrase: "yeha",
},
];

function createCelebs(data) {
    Celebrity.insertMany(data)
    .then((celebs)=>{celebs.forEach(celeb => console.log(celeb.name))
    })
    .catch(err => console.log(err))
}


function deleteAllCelebs() {
Celebrity.deleteMany().then(()=> console.log("succesfully deleted"))
.catch(err => console.log(err))
}

function deleteOneCCeleb(name, val) {
Celebrity.deleteOne({name: val}).then(()=> console.log("succesfully delete", val))
.catch(err => console.log(err))
}

// createCelebs(celebs)





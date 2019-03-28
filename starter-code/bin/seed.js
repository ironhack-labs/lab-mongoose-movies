const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity")

mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})


const celebrities = [
    {
	name:"Rafael Torres",
	occupation:"Scientist",
	catchPhrase:"I'm a winner"
    },
    {
	name:"Ralph Tower",
	occupation:"Teacher",
	catchPhrase:"I'm a Champion"
    },
    {
	name:"Rufus Thor",
	occupation:"Scientist",
	catchPhrase:"I'm handsome"
    },   
]

Celebrity.create(celebrities)
    .then(celebrities => {
	console.log(`Se crearon ${celebrities.length} registros`)
    })
    .catch(error =>{
	console.log(error)
    });

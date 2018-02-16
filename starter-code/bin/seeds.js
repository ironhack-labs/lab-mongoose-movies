const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/gallery");
const Celebrity = require("../models/Celebrity");

const celebrities = [
{
  name:"Opra Winifrey",
  ocupation:"Actress",
 catchPhrase:"Aha! moment"
 },
{
  name:"Matthew McConaughey",
  ocupation:"actor",
 catchPhrase:"Alright, alright, alright."
 },
{
  name:"Elvis",
  ocupation:"singer",
 catchPhrase:"Thank you. Thank you very much"
 }
]

Celebrity.create(celebrities,function(err,result){
  if(err) console.log("Nehhh");
  console.log("ok",result);
});



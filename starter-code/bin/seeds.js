const mongoose = require("mongoose");
const Celebrity = require("./../models/Celebrity");

const dbName = "celebritiesDB";

celebrityArr = [{
  name:"Tes",
  occupation:"Singer",
  catchPhrase:""
},{
  name:"Abi",
  occupation:"Producer",
  catchPhrase:""
},{
  name:"Marjo",
  occupation:"Actor",
  catchPhrase:""
}];

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const pr = Celebrity.create(celebrityArr);
    return pr;
  })
  .then((celebs) => {
    console.log(`Created ${celebs.length} clebrities !!.`);
    const endPr= mongoose.connection.close();
    return endPr;
  })
  .then(() => {
    console.log("connection closed.");
  })
  .catch((err) => console.log(err))
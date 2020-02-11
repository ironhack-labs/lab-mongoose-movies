const mongoose = require("mongoose");
const Celebrity = require ("./../models/Celebrity");

const dbName = "celebrityInfo";

const celebrities = [
  {
    name: "Leonardo Da Vinci",
    occupation: "Visionary",
    catchPhrase: "Greatest Man to walk on the face of the Earth"
  },
  {
    name: "Albert Einstein",
    occupation: "Physicist",
    catchPhrase: "E=mc^2"
  },
  {
    name: "Steve Jobs",
    occupation: "Enterpreneur",
    catchPhrase: "Microsoft copied the idea...Stay hungry. Stay foolish"
  }
];

mongoose
  .connect(`mongodb://localhost/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=>{
    const pr = Celebrity.create(celebrities);
    return pr;
  })
  .then(okdone =>{
    console.log(`Create the database`);
    const pr = mongoose.connection.close();
    return pr;
  })
  .then(()=>console.log("Connection closed"))
  .catch(err => console.log("there's almost never an error but still you have to have this just in case , btw this is the error ",err));
const { model , Schema } = require("mongoose")

const Celebrity = new Schema({

    name: String,
    ocupation: String,
    catchPhrase: String,

},
    {
        timesTamps : true
    }
    

)

module.exports = model("Celebrity",Celebrity)
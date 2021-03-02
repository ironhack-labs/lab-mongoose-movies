require("./../config/mongoDb");

// require the model celebrity here
const celebrityModel = require("./../../models/celebrity");

const celebrity =[{
    name: "Celine Dion",
    occupation:"Singer",
    catchPrase: "You are here,There's nothing I Fear"
}];

celebrityModel.create(celebrity)
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
});
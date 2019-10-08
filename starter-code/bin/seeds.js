// import { builtinModules } from "module";
const mongoose=require("mongoose");
const celebrityModel=require("./../models/celebrity")
const movieModel=require("./../models/movie")
mongoose.connect("mongodb://localhost/celebrities")
    .then(x=>{console.log(`connected to Mongodb ${x.connections[0].name}`)
})
    .catch(err=>{
        console.error("error creating database")
    })
// const data=[
//     {
//         name:"Niraja",
//         occupation:"student",
//         catchPhrase:"I am bored"
//     },
//     {
//         name:"Shakya",
//         occupation:"Teacher",
//         catchPhrase:"This is my surname"
//     },
//     {
//         name:"Jane Doe",
//         occupation:"sitting at home",
//         catchPhrase:"I love pizza"
//     }
// ]



const data=[
    {
        title:"Niraja",
        genre:"student",
        plot:"I am bored"
    },
    {
        title:"Shakya",
        genre:"Teacher",
        plot:"This is my surname"
    },
    {
        title:"Jane Doe",
        genre:"sitting at home",
        plot:"I love pizza"
    }
]



module.exports=data;

// function createCelebrities(data){
//     celebrityModel.create(data,function(err,ans){
//     })
// }

//createCelebrities(data);

movieModel.create(data,function(err,ans){

})

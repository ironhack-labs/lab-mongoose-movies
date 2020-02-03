const {model, Schema}=require("mongoose")

const celebritySchema= new Schema(
    {
        name:{
            type:String,
            unique:true
        },
        occupation:{
            type:String,
            enum:['Actor','Singer','Comedian','Unknown']
        },
        catchPhrase:String
    }
)

module.exports=model("Celebrity",celebritySchema)
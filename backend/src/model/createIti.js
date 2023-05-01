const mongoose=require("mongoose")
const itiSchema=new mongoose.Schema({
    destination:{type:String},

    startDate:{type:Date},
    endDate:{type:Date},
    activity:{type:String},
    accomodation:{type:String},
    profileImage:{type:String}
},{timestamps:true})

module.exports=mongoose.model("itidata",itiSchema)
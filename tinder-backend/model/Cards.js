import mongoose from "mongoose"

const cardSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    ImgUrl :{
        type : String,
        required : true
    }
},
  {timestamps : true}
)


const Cards = mongoose.model("Cards" , cardSchema)
export default Cards
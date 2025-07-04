import mongoose from "mongoose";
const subscriptionSchema= new mongoose.Schema({
    subscriber:{
        type:mongoose.Schema.Types.ObjectId,
        //one who is subscribing
        ref:"User"
    },
    subscriber:{
        type:mongoose.Schema.Types.ObjectId,
        //one who is being subscribed
        ref:"User"
    },
},{timestamps:true})
export const Subscription=mongoose.model("Subscriptioon",subscriptionSchema)
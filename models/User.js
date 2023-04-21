import mongoose from "mongoose";


let schema = new mongoose.Schema({
    email: {type:String, required:true},
    password: {type:String, required:true},
    photo: {type:String, required:true},
    role: {type:Number, required:true},
    is_oline: {type:Boolean, required:true},
    is_verified: {type:Boolean, required:true},
    verify_code: {typeof:String, required:true},
},{
    timestamps: true
})
let collection = 'users'


let users = mongoose.model(schema,collection)

export default users
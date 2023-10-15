// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// User schema for mongodb
const UserSchema = new mongoose.Schema({
    
    name:{type:String,required:true},

    email:{type:String,required:true,unique:true},

    password:{type:String,required:true},

    address:{type:String,default:""},

    zipCode:{type:String,default:""},

}, { timestamps: true });

mongoose.models = {};

// export User model
export default mongoose.model("User", UserSchema);
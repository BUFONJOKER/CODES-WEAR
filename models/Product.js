// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Product schema for mongodb
const ProductSchema = new mongoose.Schema({
    
    title:{type:String,required:true},

    slug:{type:String,required:true,unique:true},

    category:{type:String,required:true},

    size:{type:String},

    color:{type:String,required:true},

    image:{type:String,required:true},

    description:{type:String,required:true},
    
    price:{type:Number,required:true},

    availableQuantity:{type:Number,required:true},

}, { timestamps: true });

mongoose.models = {};

// export Product model
export default mongoose.model("Product", ProductSchema);
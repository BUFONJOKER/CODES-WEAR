// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// order schema for mongodb
const OrderSchema = new mongoose.Schema({
    email: { type: String, required: true },
    products: [
        {
            productId: { type: String, required: true },
            quantity: { type: Number, default: 1 },
        }
    ],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "pending",required: true },
}, { timestamps: true });

mongoose.models = {};
// export order model
export default mongoose.model("Order", OrderSchema);
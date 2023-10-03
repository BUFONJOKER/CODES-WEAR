import Order from "@/models/Order";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        await  Order.findByIdAndUpdate(req.body._id,{status:"paid"})



        res.status(200).json({ message: "Order paid Successfully" });
    }

    else{
        res.status(400).json({ message: "Order not placed" });
    }
}


export default connectDB(handler);
import Order from "@/models/Order";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let order = new Order({
            name: req.body.name,

            email: req.body.email,

            address: req.body.address,

            products: req.body.cart,
            
            products_id: req.body.products_id,
          
            amount: req.body.subTotal,

        })

        await order.save();

        res.status(200).json({order, message: "Order placed successfully" });
    }

    else{
        res.status(400).json({ message: "Order not placed" });
    }
}


export default connectDB(handler);
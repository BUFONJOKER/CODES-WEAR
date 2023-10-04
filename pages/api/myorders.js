
import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";
import jsonwebtoken from 'jsonwebtoken'

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let token = req.body.token
        let data = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY)
        let orders = await Order.find({ email: data.email })
        res.status(200).json({ orders })
    }
    else {
        res.status(200).json({ message: "Invalid Request" })
    }
};

export default connectDb(handler)

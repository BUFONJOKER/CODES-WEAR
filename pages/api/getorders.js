import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {

        let orders = await Order.find();
        // console.log(orders)
        // console.log(typeof(orders))
        // Object.keys(orders).map((item) => {
        //         if(orders[item]._id == "6525ae84fb2a9cf2e38ea442"){
        //                 console.log(orders[item].products)
        //         }
                
        // })
        
        res.status(200).json({ orders });

};

export default connectDb(handler)




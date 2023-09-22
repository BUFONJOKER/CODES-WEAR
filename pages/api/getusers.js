import User from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
        let Users = await User.find();
        res.status(200).json({ Users });

};

export default connectDb(handler)

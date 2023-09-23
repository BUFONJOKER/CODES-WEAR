import User from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
        let users = await User.find();
        res.status(200).json({ users });

};

export default connectDb(handler)

import User from "@/models/User";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let u = new User(req.body);
        await u.save();
        res.status(200).json({ message: "User added successfully" });
    }

    else {
        res.status(400).json({ message: "User not added" });
    }
}

export default connectDB(handler);
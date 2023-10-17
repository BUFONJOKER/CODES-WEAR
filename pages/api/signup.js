import User from "@/models/User";
import connectDB from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {

        try {
            let u = new User({
                name: req.body.name,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET_KEY).toString(),
                phone: req.body.phone,
                address: req.body.address,
                zipCode: req.body.zipCode,
            });
            await u.save();

            res.status(200).json({ message: "User Created successfully" });
        } catch (error) {
            res.status(400).json({ message: "User not created" });
        }
    }

    else {
        res.status(400).json({ message: "User not created" });
    }
}

export default connectDB(handler);
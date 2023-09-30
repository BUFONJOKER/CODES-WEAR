import User from "@/models/User";
import connectDB from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {
      
        let u = new User({name:req.body.name,
                        email:req.body.email,
                        password:CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET_KEY).toString()});
        await u.save();
        
        res.status(200).json({ message: "User Created successfully" });
    }

    else {
        res.status(400).json({ message: "User not created" });
    }
}

export default connectDB(handler);
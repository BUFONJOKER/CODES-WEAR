import User from "@/models/User";
import connectDB from "@/middleware/mongoose";
let CryptoJS = require("crypto-js");
let jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            // Decrypt the password
            let bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET_KEY);
            let originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            if (user.email == req.body.email && originalPassword == req.body.password) {
                // Create token using jwt of the user
                let token = jwt.sign({ name: user.name,
                     email: user.email, password: originalPassword }, process.env.JWT_SECRET_KEY , { expiresIn: '24h' });
                
                res.status(200).json({success: true, token: token});
            }
        }
        else {
            res.status(200).json({ success: false, message: "Invalid Credentials" });
        }
    }
}

export default connectDB(handler);
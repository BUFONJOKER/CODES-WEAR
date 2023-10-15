import User from "@/models/User";
import connectDB from "@/middleware/mongoose";
import jsonwebtoken from 'jsonwebtoken'
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {

        let token = req.body.token;
        let data = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
        let user = await User.findOne({ email: data.email });
        console.log(user._id)
        let updatedUser;
        let updateData = {};

        if (req.body.name) updateData.name = req.body.name;
        if (req.body.address) updateData.address = req.body.address;
        if (req.body.phone) updateData.phone = req.body.phone;
        if (req.body.zipCode) updateData.zipCode = req.body.zipCode;

        if (req.body.password) {
            let password = CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET_KEY).toString();
            updateData.password = password;
        }

        if (Object.keys(updateData).length > 0) {
            updatedUser = await User.findByIdAndUpdate(user._id, updateData);
        }


        res.status(200).json({ updatedUser });


    }

    else {
        res.status(400).json({ message: "User not Updated" });
    }
}

export default connectDB(handler);
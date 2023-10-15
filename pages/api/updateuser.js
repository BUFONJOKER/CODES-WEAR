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
        if (req.body.name) {
           
            updatedUser = await User.findByIdAndUpdate(user._id, {name:req.body.name})
        }
        else if(req.body.address){
            updatedUser = await User.findByIdAndUpdate(user._id,{address: req.body.address})
        }
        else if(req.body.zipCode){
            updatedUser = await User.findByIdAndUpdate(user._id, {zipCode:req.body.zipCode})
        }
   
        else if(req.body.password){
            let password = CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET_KEY).toString()

            updatedUser = await User.findByIdAndUpdate(user._id,{password:password})
        }


        res.status(200).json({ updatedUser });


    }

    else {
        res.status(400).json({ message: "User not Updated" });
    }
}

export default connectDB(handler);
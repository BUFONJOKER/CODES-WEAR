
import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import jsonwebtoken from 'jsonwebtoken'
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            let token = req.body.token;
            let data = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
            let user = await User.findOne({ email: data.email });
        
            res.status(200).json({ user });
          } catch (error) {
            // Handle the error here, for example, send an error response
            res.status(500).json({ error: "An error occurred while processing the request." });
          }
          
    }
    else {
        res.status(200).json({ message: "Invalid Request" })
    }
};

export default connectDb(handler)

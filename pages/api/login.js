import User from "@/models/User";
import connectDB from "@/middleware/mongoose";
let CryptoJS = require("crypto-js");
const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ email: req.body.email});
        
        if(user){
            let bytes  = CryptoJS.AES.decrypt(user.password, 'helloworld');
            let originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            if (user.email == req.body.email && originalPassword == req.body.password) {
                res.status(200).json({ success:true,
             name: user.name, email: user.email, password: originalPassword });
            }
        }
        else{
            res.status(200).json({ success:false,message:"Invalid Credentials" });
        }
        
        
       
    }

    
}

export default connectDB(handler);
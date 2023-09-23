import User from "@/models/User";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ email: req.body.email, password: req.body.password });
        if(user){
            if (user.email == req.body.email && user.password == req.body.password) {
                res.status(200).json({ success:true,
             name: user.name, email: user.email, password: user.password });
            }
        }
        else{
            res.status(200).json({ success:false,message:"Invalid Credentials" });
        }
        
        
       
    }

    
}

export default connectDB(handler);
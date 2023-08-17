import Product from "@/models/Product";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let index = 0; index < req.body.length; index++) {
            let p = new Product({
                title: req.body[i].title,
    
                slug: req.body[i].slug,
    
                category: req.body[i].category,
    
                size: req.body[i].size,
    
                color: req.body[i].color,
    
                image: req.body[i].image,
    
                description: req.body[i].description,
    
                price: req.body[i].price,
            })
            
        }

        await p.save();
    }
}

export default connectDB(handler);
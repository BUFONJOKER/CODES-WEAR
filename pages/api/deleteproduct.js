import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === "DELETE") {
        try {
            let product = await Product.findOne({
                title: req.body.title,
                category: req.body.category,
                size: req.body.size,
                color: req.body.color,
                price: req.body.price,
                availableQuantity: req.body.availableQuantity,
            })

            if (product) {

                let deleteProduct = await Product.deleteOne({
                    title: req.body.title,
                    category: req.body.category,
                    size: req.body.size,
                    color: req.body.color,
                    price: req.body.price,
                    availableQuantity: req.body.availableQuantity,
                });
                if(deleteProduct){
                    res.status(200).json({ message: "Product deleted successfully" });
                }
                else{
                    res.status(400).json({ message: "Product delete failed" });
                }
            }

            else {
                res.status(400).json({ message: "Product not found" });
            }
            


            
        } catch (error) {
            res.status(400).json({ message: "Product delete failed" });
        }
    }

    else {
        res.status(500).json({ message: "request method does not match" });
    }
};

export default connectDb(handler)


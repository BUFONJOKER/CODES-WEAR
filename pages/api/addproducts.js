import Product from "@/models/Product";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    try {
        if (req.method == 'POST') {
            for (let i = 0; i < req.body.length; i++) {
                let p = new Product({
                    title: req.body[i].title,
                    slug: req.body[i].slug,
                    category: req.body[i].category,
                    size: req.body[i].size,
                    color: req.body[i].color,
                    image: req.body[i].image,
                    description: req.body[i].description,
                    price: req.body[i].price,
                    availableQuantity: req.body[i].availableQuantity,
                });

                await p.save();
            }

            res.status(200).json({ message: "Product added successfully" });
        } else {
            res.status(400).json({ message: "Product not added" });
        }
    } catch (error) {
        // Handle the error here
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default connectDB(handler);

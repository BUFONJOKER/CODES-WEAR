import Order from "@/models/Order";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
       

        let id = req.body._id
        let orders = await Order.find();
   
        let cart;
        Object.keys(orders).map((item) => {
                if(orders[item]._id == id){
                      cart = orders[item].products
                }
                
        })
        
        
 

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`);

        //get the data from api
        const products = await response.json();


        // loop through the products

        let availableQuantity;

        Object.keys(cart).map(async (item) => {
            for (let i = 0; i < products.products.length; i++) {
                if (products.products[i].title == cart[item].name &&
                    products.products[i].color == cart[item].variant && products.products[i].size == cart[item].size) {
    
                 
                    let id = products.products[i]._id
    
                    if (products.products[i].availableQuantity < 1) {
                        alert("Product is out of stock")
                        availableQuantity = 0
                    }
                    else if(products.products[i].availableQuantity<cart[item].quantity){
                        alert("Product is out of stock")
                       
                    }
                    else {
                        availableQuantity = products.products[i].availableQuantity - 1
                    }
                    let data = [
                        {
                            "_id": id,
    
    
                            "availableQuantity": availableQuantity
    
                        }
                    ]
    
                
                    try {
                        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateproducts`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        });
    
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        else{
                            await  Order.findByIdAndUpdate(req.body._id,{status:"paid"})
                            res.status(200).json({ message: "Order paid Successfully" });
                        }
    
                        const responseData = await response.json();


                    } catch (error) {
                        res.status(400).json({ message: "Order not placed" });
                    }
    
    
    
                }
            }
    
    
        })


       
    }

    else{
        res.status(400).json({ message: "Order not placed" });
    }
}


export default connectDB(handler);
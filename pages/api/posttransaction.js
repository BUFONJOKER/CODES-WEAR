import Order from "@/models/Order";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
       

        let id = req.body._id
        let orders = await Order.find();
        console.log(orders)
        console.log(typeof(orders))
        let cart;
        Object.keys(orders).map((item) => {
                if(orders[item]._id == id){
                      cart = orders[item].products
                }
                
        })
        
        
 

        const response = await fetch('http://localhost:3000/api/getproducts');

        //get the data from api
        const products = await response.json();


        // loop through the products

        let availableQuantity;

        Object.keys(cart).map(async (item) => {
            for (let i = 0; i < products.products.length; i++) {
                if (products.products[i].title == cart[item].name &&
                    products.products[i].color == cart[item].variant && products.products[i].size == cart[item].size) {
    
                    console.log(products.products[i].availableQuantity)
                    console.log(products.products[i]._id)
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
    
                    console.log(data)
    
                    try {
                        const response = await fetch("http://localhost:3000/api/updateproducts", {
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
                        }
    
                        const responseData = await response.json();
                        console.log(responseData);
                    } catch (error) {
                        console.error(error);
                    }
    
    
    
                }
            }
    
    
        })




        



        res.status(200).json({ message: "Order paid Successfully" });
    }

    else{
        res.status(400).json({ message: "Order not placed" });
    }
}


export default connectDB(handler);
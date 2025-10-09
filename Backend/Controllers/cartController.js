import Cart from "../Models/CartSchema.js"



export async function addToCart(req,res) {
    let userId = req.user?._id

    let {productId, price, shipping} = req.body


    if(!userId || !productId){
        return res.status(400).json({error: "Missing userId or productId"})
    }
    

    try {
        let cart = await Cart.findOne({userId})

        if(!cart){
            cart = new Cart({
                userId,
                products:[],
                totalPrice :0,
                totalShipping:0
            })
        }

        let existingProduct = cart.products.find(
            (p)=>p.item.toString() === productId
        )


        if(existingProduct){
            existingProduct = existingProduct.qty + 1

        }else{
            cart.products.push({
                item:productId,
                price,
                shipping,
                qty:1
            })
        }


        cart.totalPrice = cart.products.reduce((sum,p) =>sum + p.price * p.qty, 0)

        cart.totalShipping = cart.products.reduce((sum,p) =>sum + p.shipping, 0)

        await cart.save()

        res.status(200).json({message:"Product added to cart", cart})

        
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Server Error"})
  
    }
}



export const getCart = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.status(401).json({ error: "Not logged in" });

    let cart = await Cart.findOne({ userId }).populate("products.item");
    console.log(cart);
    
    if (!cart)
      cart = { userId, products: [], totalPrice: 0, totalShipping: 0 };
    else cart = cart.toObject();

    res.status(200).json({ cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from '../components/CartItem'

const Cart = () => {


  const { cart } = useSelector((state) => state);
  const [ totalAmount , setTotalAmount] = useState(0)

  useEffect( () => {
    setTotalAmount( cart.reduce((acc, curr) => acc + curr.price,0));
  }, [cart])

  
  return ( <div>
      {
        cart.length > 0 ? ( 
          <div className="flex max-w-6xl mx-auto gap-x-10 ">
           <div>
            {
              cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
              } )
            }
           </div> 

           <div className="flex justify-between flex-col pt-10 ">
           <div className="fixed top-25 right-50">
              <div className="text-green-600 font-bold uppercase" >Your Cart</div>
              <div className="text-green-600 text-5xl font-bold uppercase">Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>  
              </p>            
           </div>

           <div className=" fixed bottom-6">
            <p className="mb-3">Total Amount:<span className="font-bold" >${totalAmount}</span>  </p>
           <button className="bg-green-600 text-white font-bold rounded-md py-1 px-32">Checkout now</button>

           </div>
          </div>

           </div>

           
        ) 
       :
        ( <div className=" h-screen flex flex-col items-center justify-center"> <h1 className="mb-6 text-lg">Cart Empty</h1> <Link to={"/"}> <button className="bg-green-600 text-white font-bold rounded-md py-1 px-32"> Shop Now</button></Link> </div>) 
      }

    </div>
    );
  
};

export default Cart;

import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromcart = () => {
     dispatch(remove(item.id));
     toast.success("Item Removed");
  }
  return <div>
    <div className="flex max-w-3xl mt-8 gap-x-12 border-b-2 border-black p-5 ">
      <div>
      <img height="150" width="150" src={item.image}/>
      </div>

      <div className="flex flex-col max-w-xs gap-y-5 ">
        <div className="font-bold"><h1>{item.title}</h1></div>
        <div className="text-sm"><h1>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1></div>
        <div className="flex justify-between text-green-500 font-bold">
         <p>${item.price}</p>
         <div onClick={removeFromcart} >

          <FcDeleteDatabase/>

         </div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;

import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";


const AppCart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItems());
        
    }

    return (
        <div className="text-center m-auto w-9/12">
            <h1 className="text-3xl font-bold my-5">Cart</h1>
            <div>
                <ItemList items={cartItems}/>
            </div>
            {cartItems.length === 0 && <h1 className="text-xl font-bold my-5">Your Cart is Empty 😋</h1>}
            <div className="flex justify-center">
            {cartItems.length != 0 && <button className="bg-green-500 text-white px-4 py-2 rounded-lg mx-10">Proceed to Check Out</button>}
            {cartItems.length != 0 && <button className="bg-red-500 text-white px-4 py-2 rounded-lg mx-10" onClick={handleClearCart}>Clear Cart</button>}
            </div>
        </div>
    );
};

export default AppCart;
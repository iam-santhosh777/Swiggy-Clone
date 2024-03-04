import { CDN_URL } from "../utils/constants";
import { addToCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const ItemList = ({items}) => {
    // const dispatch = useDispatch();
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addToCart(item));
    }
    return(
        <div>
            <div>
                {
                    items.map((item) => <div key={item.card.info.id} className="py-3 m-2 border-b-2 border-gray-300 flex" >
                        <div className="flex flex-col gap-1 text-start w-9/12">
                        <span className="font-normal font-lg">{item.card.info.name}</span>
                        <span className="font-mono">{"₹ " + (item.card.info.price/100 || item.card.info.defaultPrice/100)}</span>
                        <p className="text-xs text-gray-500">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 flex justify-center items-end">
                            <img className="w-32 h-32 rounded-xl mx-8" src={CDN_URL+item.card.info.imageId} alt="item"/>
                            <button className="absolute bg-green-500 text-white w-20 h-8 rounded-lg" 
                            onClick={() => handleAddItem(item)}>Add +</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default ItemList;
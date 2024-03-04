import {LOGO_URL} from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
const AppHeader = () => {
    let [btnNameReact, setBtnNameReact] = useState("Login");
    // console.log("Header Rendered");

    const {loggedInUser} = useContext(UserContext);
    useEffect(()=>{
        // console.log("Use effect Called");
    }, [btnNameReact]);

    // 1 => if no dependency array useEffect is called on every render
    // [] => If empty dependency array then useEffect is called only once i.e., at
    // if depenedency array is [btnNameReact] => called everytime btnNameReact is updated,
    
    const onlineStatus = useOnlineStatus();


    // subscribing to redux store by using useSelector
    const cart = useSelector((myStore) => myStore.cart.items);

    return(
        <div className=" flex justify-between bg-blue-200">
            <div>
                <img className="w-20 m-2" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex gap-4 text-sm mx-6">
                    <li>Online Status: {onlineStatus ? "✅" : "❎"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li className="text-sm font-bold "><Link to="/cart">Cart - ({cart.length} Items)</Link></li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default AppHeader;
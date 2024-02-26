import {LOGO_URL} from "../utils/constants";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const AppHeader = () => {
    let [btnNameReact, setBtnNameReact] = useState("Login");
    // console.log("Header Rendered");
    
    useEffect(()=>{
        // console.log("Use effect Called");
    }, [btnNameReact]);

    // 1 => if no dependency array useEffect is called on every render
    // [] => If empty dependency array then useEffect is called only once i.e., at
    // if depenedency array is [btnNameReact] => called everytime btnNameReact is updated,
    
    const onlineStatus = useOnlineStatus();

    return(
        <div className=" flex justify-between bg-blue-200">
            <div>
                <img className="w-20 m-2" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex gap-4 text-xl font-bold mx-6">
                    <li>Online Status: {onlineStatus ? "✅" : "❎"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default AppHeader;
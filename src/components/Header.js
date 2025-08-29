import { use, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [ btnName, setbtnName ] = useState("Login");
    console.log("Header render");

    // useEffect is called after every render of that component.
    // dependancy array changes the behavior of useEffect.
    // dependancy array is not mandatory , only callback function is mandatory.
    // 1. if no dependancy array => useEffect is called on every render.
    // 2. if dependancy array is empty = [] => useEffect is called on initial render (just once)
    // 3. if dependancy array is [btnName] => useEffect is called everytime btnName is updated 
    //useEffect(() => {
    //    console.log("useEffect called");
    //}, [btnName]);
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between items-center px-2.5 py-2.5 bg-white h-20 shadow-md">
            <div className="logo-container">
                <img 
                className="w-20 h-20" 
                src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="flex list-none">
                    <li className="p-2 m-2.5 text-base">
                        Online status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="p-2 m-2.5 text-base">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-2 m-2.5 text-base">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-2 m-2.5 text-base">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-2 m-2.5 text-base">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    
                    <li className="p-2 m-2.5 text-base">Cart</li>
                    <button className="px-5 cursor-pointer"
                    onClick={() => {
                        btnName === "Login"
                        ? setbtnName("Logout")
                        : setbtnName("Login");
                        
                    }}
                    > 
                    {btnName}   
                    </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;
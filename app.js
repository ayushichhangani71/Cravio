import React from "react";
import ReactDOM from 'react-dom/client';
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"></img>
            </div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
// inline styles
const styleCard = {
    backgroundColor: "#f0f0f0"
}
const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_360507.JPG"></img>
            <h3>Burger Farm</h3>
            <h4>Burgers, Ice Cream</h4>
            <h4>4.5 stars</h4>
            <h4>20-25 mins</h4>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

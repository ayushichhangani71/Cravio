import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    //Local State variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    // const arr = useState(resList);
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurant = arr[1];
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText] = useState("");
    // whenever state variables update , react triggers a reconciliation cycle(re-renders the component)
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.2389469&lng=73.02430939999999&carousel=true&third_party_vendor=1"
        );
        const json = await data.json();
        console.log(json);
        // optional chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //if(listOfRestaurants.length === 0) {
       // return <Shimmer />;
    // };
    // conditional Rendering
    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text"
                className="search-box"
                 value={searchText}
                 onChange={(e) => {
                    setsearchText(e.target.value);
                 }} />
                <button className="search-btn" onClick={() => {
                    // Filter the list of restaurants and update the UI
                    // searchText
                    const filteredList = listOfRestaurants.filter(
                        (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setListOfRestaurant(filteredList); 
                    console.log(searchText);
                }}>search</button>
            </div>
                <button className="filter-btn" 
                onClick={() => {
                    // filter logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurant(filteredList);
                     // console.log(listOfRestaurants); 
                     }}
                >
                    Top Rated Restaurants</button>
                </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}              
            </div>
        </div>
    );

};
export default Body;

import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constants";

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
        const data = await fetch(SWIGGY_API_URL); 
        const json = await data.json();
        // optional chaining
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setListOfRestaurant(restaurants);
        setfilteredRestaurant(restaurants);

        console.log("✅ Fetched successfully", restaurants.length);
        console.log(json);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return (
        <h1>
            Looks like you are offline!! Please check your internet connection.
        </h1>
        );
    };

    //if(listOfRestaurants.length === 0) {
       // return <Shimmer />;
    // };
    // conditional Rendering
    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="px-11">
            <div className="flex items-center">
            <div>
                <input type="text"
                className="border border-solid"
                 value={searchText}
                 onChange={(e) => {
                    setsearchText(e.target.value);
                 }} 
                 />
                <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                    onClick={() => {
                        // Filter the list of restaurants and update the UI
                        // searchText
                        const filteredList = listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilteredRestaurant(filteredList); 
                        console.log(searchText);
                    }}>search</button>
            </div>
            <div className="m-4">
                <button className="px-4 py-1 bg-green-100 rounded-lg" 
                onClick={() => {
                    // filter logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setfilteredRestaurant(filteredList);
                     // console.log(listOfRestaurants); 
                     }}
                    >
                    Top Rated Restaurants</button>
            </div>
                
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-8 py-2">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id}
                     to={"/restaurants/"+ restaurant.info.id}>
                        <RestaurantCard resData={restaurant}/>
                        </Link>
                ))}              
            </div>
        </div>
    );

};
export default Body;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import MenuCategory from "./MenuCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const { resId } = useParams(); // Get the restaurant ID from the URL parameters
    const resInfo = useRestaurentMenu(resId);
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info  || {};

    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);

    // const itemCards = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

     // const menuSections = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    return resInfo === null ? (
      <Shimmer />
    ) : (
        <div className="max-w-[900px] mx-auto p-4 font-sans">
            <div className="mb-6">
            <h1 className="font-bold text-[rgba(2,6,12,0.92)] mb-[3px] font-sans text-[28px] leading-[22px]">{name}</h1>
            <p className="text-[16px] text-[#686b78] mt-1.5 mb-[2px] h-9 overflow-hidden leading-[1.2] font-sans">{cuisines.join(", ")}</p>
            <p className="text-[#777] mt-0.5">{costForTwoMessage || ""}</p>
            </div>
            <div className="flex flex-col font-bold">
            <h2>Menu</h2>
            {/* categories accordions */}
            {categories.map((category) => (
              <MenuCategory key={category.card.card.title} data={category?.card?.card} />
             ))}
            
            </div>
        </div>
    )
}

export default RestaurantMenu;


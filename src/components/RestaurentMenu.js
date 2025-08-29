import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import { FOODITEM_IMAGE_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const { resId } = useParams(); // Get the restaurant ID from the URL parameters
    const resInfo = useRestaurentMenu(resId);
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info  || {};

    const title = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title || "Menu";

    const itemCards = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

     const menuSections = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    return resInfo === null ? (
      <Shimmer />
    ) : (
        <div className="max-w-[900px] mx-auto p-4 font-sans">
            <div className="mb-6">
            <h1 className="font-bold text-[rgba(2,6,12,0.92)] mb-[3px] font-sans text-[28px] leading-[22px]">{name}</h1>
            <p className="text-[16px] text-[#686b78] mt-1.5 mb-[2px] h-9 overflow-hidden leading-[1.2] font-sans">{cuisines.join(", ")}</p>
            <p className="text-[#777] mt-0.5">{costForTwoMessage || ""}</p>
            </div>
            <div className="flex flex-col gap-8 font-bold">
            <h2>Menu</h2>
            {menuSections.map((sec, i) => {
             const secCard = sec?.card?.card;
             const title = secCard?.title;
             const items = secCard?.itemCards || [];
             if (!title || items.length === 0) return null;

             return (
            <section key={i} className="menu-section">
              <h2 className="text-[22px] font-semibold mb-4">{title}</h2>
              <div className="menu-items">
                {items.map((item, j) => {
                  const itemInfo = item?.card?.info || {};
                  return (
                    <div key={j} className="item-card flex justify-between items-start py-4 border-b border-gray-300 
            transition-shadow duration-200 ease-in-out hover:shadow-sm">
                        <div className="w-3/4 pr-3">
                      <h3 className="text-[18px] font-semibold my-[2px]">{itemInfo.name}</h3>
                      <p className="text-[16px] font-medium text-[#333]">
                        ₹
                        {itemInfo.price / 100 ||
                          itemInfo.defaultPrice / 100 ||
                          "—"}
                      </p>
                       {itemInfo?.ratings?.aggregatedRating?.rating && (
                       <p className="text-[#1c8a2b] text-[14px] my-1">
                       ⭐ {itemInfo?.ratings.aggregatedRating.rating} ({itemInfo?.ratings.aggregatedRating.ratingCountV2})
                       </p>
                      )}

                      {itemInfo.description && (
                        <p className="flex break-words font-normal text-[rgba(2,6,12,0.6)] text-[16px] 
          leading-[21px] tracking-[-0.4px] mt-3 font-gilroy">
                          {itemInfo.description}
                        </p>
                      )}
                      </div>
                      {/* Right Section */}
                  <div className="relative w-[150px] h-[140px] flex-shrink-0 rounded-md overflow-hidden">
                    {itemInfo.imageId && (
                      <img
                        src={
                          FOODITEM_IMAGE_URL +
                          itemInfo.imageId
                        }
                        alt={itemInfo.name}
                        className="w-full h-full object-cover block rounded-md"
                      />
                    )}
                    <button className="absolute bottom-2 left-1/2 -translate-x-1/2 
               bg-white text-[#1c8a2b] font-semibold border border-gray-300 
               py-1 px-3 rounded cursor-pointer hover:bg-gray-100">ADD</button>
                  </div>
                    </div>
                  );
            })}
            </div>
            </section>
             );
            })}
            
            </div>
        </div>
    )
}

export default RestaurantMenu;


import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      areaName,
      costForTwo,
      sla,
    } = resData?.info;

    return (
        <div className="px-4 py-2 m-2 w-60 rounded-xl
             transition duration-200 ease-in-out
            font-sans flex flex-col cursor-pointer hover:scale-95">
            
            <img className="h-38 object-cover rounded-xl" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <div className="py-2.5 px-3">
            <h3 className="font-bold text-[rgba(2,6,12,0.92)] mb-[3px] py-2.5 font-sans text-[28px] leading-[22px]">{name}</h3>
            <div className="flex justify-between text-[14px]">
            <span className="bg-[#48c479] text-white px-1.5 py-0.5 rounded text-[14px] font-medium">{avgRating} ★</span>
            <span className="text-[#686b78]">{sla?.deliveryTime} MINS</span>
            </div>
            <p className="text-[16px] text-[#686b78] mt-1.5 mb-[2px] h-9 overflow-hidden leading-[1.2] font-sans">{cuisines.join(", ")}</p>
            <p className="text-[16px] text-[#686b78] mt-1.5 mb-[2px] h-9 overflow-hidden leading-[1.2] font-sans">{areaName}</p>
            </div>
        </div>
    );
};
export default RestaurantCard;
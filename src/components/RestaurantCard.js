import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData, discountMessage }) => {
    console.log("📦 Props in RestaurantCard:", discountMessage);
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      areaName,
      costForTwo,
      sla,
    } = resData?.info || {};
     console.log("🔎 Discount for", name, discountMessage);

    return (
        <div className="px-4 py-2 m-2 w-60 rounded-xl
             transition duration-200 ease-in-out
            font-sans flex flex-col cursor-pointer hover:scale-95">
            <div className="relative h-36 w-full rounded-xl">
            <img className="h-full w-full object-cover rounded-xl" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            {/* Discount badge stays inside this div */}
            {discountMessage && (
            <span className="absolute bottom-2 left-2 bg-gray-800 text-white text-sm font-bold px-2 py-1 rounded-md">
            {discountMessage}
            </span>
            )}
            </div>
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
//higher order component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const info = props?.resData?.info;
    console.log("👉 Full info object:", info);
    const discount = info?.aggregatedDiscountInfoV3;

    let discountMessage = "";
    if (discount) {
      if (discount.header && discount.subHeader) {
        discountMessage = `${discount.header} ${discount.subHeader}`;
      } else if (discount.header) {
        discountMessage = discount.header;
      } else if (discount.subHeader) {
        discountMessage = discount.subHeader;
      }
    }

    // 🔎 Debug log
    console.log("💡 inside HOC:", info?.name, discount, "=>", discountMessage);

    return <RestaurantCard {...props} discountMessage={discountMessage} />;
  };
};


export default RestaurantCard;
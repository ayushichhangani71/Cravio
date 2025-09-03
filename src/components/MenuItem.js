import { FOODITEM_IMAGE_URL } from "../utils/constants";
const MenuItem = ({ items }) => {
    return (
    <div>
        {items.map((item) => (
            <div key={item.card.info.id}
            className="m-2 flex justify-between items-start py-4 border-b border-gray-300 
                        transition-shadow duration-200 ease-in-out hover:shadow-sm text-left">
                <div className="w-3/4 pr-3">
                    <h3 className="text-[18px] font-semibold my-[2px]">{item.card.info.name}</h3>
                    <p className="text-[16px] font-medium text-[#333]">
                        ₹
                        {item.card.info.price / 100 ||
                          item.card.info.defaultPrice / 100 ||
                          "—"}</p>
                    {item.card.info?.ratings?.aggregatedRating?.rating && (
                       <p className="text-[#1c8a2b] text-[14px] my-1">
                       ⭐ {item.card.info?.ratings.aggregatedRating.rating} ({item.card.info?.ratings.aggregatedRating.ratingCountV2})
                       </p>
                      )}
                      {item.card.info.description && (
                        <p className="flex break-words font-normal text-[rgba(2,6,12,0.6)] text-[16px] 
                        leading-[21px] tracking-[-0.4px] mt-3 font-gilroy">
                          {item.card.info.description}
                        </p>
                      )}
                </div>
                 {/* Right Section */}
                <div className="relative w-[150px] h-[140px] flex-shrink-0 rounded-md overflow-hidden">
                {item.card.info.imageId && (
                <img src={
                        FOODITEM_IMAGE_URL +
                        item.card.info.imageId
                 }
                alt={item.card.info.name}
                className="w-full h-full object-cover block rounded-md"
                />
                )}
                <button className="absolute bottom-2 left-1/2 -translate-x-1/2 
                 bg-white text-[#1c8a2b] font-semibold border border-gray-300 
                py-1 px-3 rounded cursor-pointer hover:bg-gray-100">ADD</button>
                </div>
            </div>
        ))}
        </div>
        );
};
export default MenuItem;
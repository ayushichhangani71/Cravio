import { useState } from "react";
import MenuItem from "./MenuItem";
const MenuCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(true);
    const handleClick = () => {
        setShowItems(!showItems);
    };
    return (
        <div>
            {/*Header */}
            <div className=" mx-auto my-2 shadow-lg p-2 rounded-sm">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
                <span className="font-bold text-lg mb-2">{data.title}({data.itemCards.length})</span>
                <span>̬̬̬🠋</span>
                </div>
            {/* Accordian Body */}
            { showItems && <MenuItem items={data.itemCards} />}
            </div>
            
        </div>
    );
};
export default MenuCategory;
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestarauntMenu from "../utils/useRestarauntMenu";
import { CDN_URL } from "../utils/constants";
import RestarauntCategory from "./RestarauntCategory";
import { useState } from "react";

const RestrarauntMenu = () => {
  const [showIndex,  setShowIndex] = useState(null);
  const [showIcon, setShowIcon] = useState("⏬");

  const dummy = "Dummy Data";


  const { resId } = useParams();
  const resInfo = useRestarauntMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName, avgRatingString } = resInfo?.cards[0]?.card?.card?.info;
  // console.log(resInfo?.cards[0].card.card.info);
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


  const toggleShowItems = (index) => {
    setShowIndex(showIndex === index ? null : index);
    setShowIcon(showIndex === index ? "⏬" : "⏫");
  };
 
  return (
    
      <div className="text-center">
        <h1 className="font-bold text-4xl my-4">{name}</h1>
        <p className="text-lg text-gray-600 italic">{cuisines.join(", ")}</p>
        <p className="font-mono font-bold">{costForTwoMessage}</p>
        <p className="font-mono">{"📍" + areaName}</p>
        <p>{"⭐ " + avgRatingString}</p>
        
        {
          categories.map((category, index) => (<RestarauntCategory 
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            toggleShowItems={() => toggleShowItems(index)}
          />))
        }
      </div>
    
  );
};

export default RestrarauntMenu;

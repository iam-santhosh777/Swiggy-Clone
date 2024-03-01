// import { useState } from "react";
// import ItemList from "./ItemList";

// const RestarauntCategory = ({data, showItems, setShowIndex, setShowIcon}) => {

//     // const [showItems, setShowItems] = useState(false);
//     const [icon, setIcon] = useState("⏬");

//     const updateItems = () => {
        
//         setShowIndex(showItems ? false : data.index)
//         setShowIcon(showItems ? "⏬" : "⏫");
//         setIcon(showItems ? "⏬" : "⏫");
//         // setIcon(showItems ? "⏬" : "⏫");


//     }

//     return (
//         <div>
//             <div className="w-8/12 bg-gray-200 shadow-lg p-4 mx-auto my-4">
//                 <div className="flex justify-between cursor-pointer" onClick={updateItems}>
//                 <span className="font-bold text-sm">{data.title} ({data.itemCards.length})</span>
//                 <span>{icon}</span>

//                 </div>
//                 {showItems && <ItemList key={data.title} items={data.itemCards}/>}
//             </div>

//         </div>
//     )
// }

// export default RestarauntCategory;

// RestarauntCategory.js

import { useState } from "react";
import ItemList from "./ItemList";

const RestarauntCategory = ({ data, showItems, toggleShowItems}) => {
  const [icon, setIcon] = useState("⏬");

  
  const updateItems = () => {
    toggleShowItems(data.index);
    setIcon(showItems ? "⏬" : "⏫");
  };

  return (
    <div>
      <div className="w-8/12 bg-gray-200 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={updateItems}>
          <span className="font-bold text-sm">{data.title} ({data.itemCards.length})</span>
          <span>{icon}</span>
        </div>
        {showItems && <ItemList key={data.title} items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestarauntCategory;

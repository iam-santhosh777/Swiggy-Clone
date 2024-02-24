import  {useState, useEffect} from "react";
import Shimmer from "./ShimmerUI";
import {useParams} from "react-router-dom";
import {Menu_API} from "../utils/constants";

const RestrarauntMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} =  useParams();
    console.log(resId);

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(Menu_API + resId);
        const jsonData = await data.json();
        // console.log(jsonData);
        setResInfo(jsonData.data);
    };

    if(resInfo === null) return <Shimmer />;
    

    // const {name, cuisines} = resInfo?.cards[2]?.card?.card?.info;
    const { name, cuisines, costForTwoMessage, } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} -- {costForTwoMessage}</p>
            <h4></h4>
            <ul>

                {itemCards.map((item) => {
                    return (
                        <li key={item.card.info.id}>{item.card.info.name} - {" "} {item.card.info.price / 100 + " Rs/-"}</li>
                    )

                })}
            </ul>
        </div>
    )
}

export default RestrarauntMenu;
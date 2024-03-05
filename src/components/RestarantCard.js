
import { useContext } from "react";
import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/userContext";



const RestarantCard = (props) => {
    const {resData} = props;
    const userInfo = useContext(UserContext); 
    // console.log(userInfo);  
    console.log(resData);


    //const {resName, cuisine} = props;
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName} = resData?.info;

    
    return(
        <div className="m-4 w-[250px] h-[300px] rounded-xl hover:scale-95 hover:box-shadow-md">
            <img className="w-[250px] h-[150px] bg-size-cover rounded-xl" alt="rescardImg" src={ CDN_URL + cloudinaryImageId}/>
            <div className="mx-2">
            <h3 className="font-bold text-green-700">{name}</h3>
            <p className="size-auto">{cuisines.join(", ")}</p>
            <p>{avgRating} Stars</p>
            <p>{costForTwo}</p>
            <p>{areaName}</p>
            <p>User : {userInfo.loggedInUser}</p>
            </div> 
        </div>
    )
}

// Higher order Component
// input - (RestarantCard) - output (restrarauntCardStatus)

export const RestraCardOpenStatus = (RestarantCard) => {
    return(props) => {
        return (
            <div>
                <label className="absolute m-2 p-2 rounded-lg bg-black text-white"> Opened </label>
                <RestarantCard {...props} />
            </div>
        )
    }
}

export default RestarantCard;

import {CDN_URL} from "../utils/constants";

const styleCard = {
    backgroundColor: "light grey",
    color: "green"
};

const textStyle = {
    color: "black" 
}

const RestarantCard = (props) => {
    const {resData} = props;
    //const {resName, cuisine} = props;
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName} = resData?.info;
    
    return(
        <div className="m-4 w-[250px] h-[300px] rounded-xl hover:scale-95 hover:box-shadow-md" style={styleCard}>
            <img className="w-[250px] h-[150px] bg-size-cover rounded-xl" alt="rescardImg" src={ CDN_URL + cloudinaryImageId}/>
            <div className="mx-2">
            <h3 className="font-bold text-green-700">{name}</h3>
            <p style={textStyle} className="size-auto">{cuisines.join(", ")}</p>
            <p style={textStyle}>{avgRating} Stars</p>
            <p style={textStyle}>{costForTwo}</p>
            <p style={textStyle}>{areaName}</p>
            </div>
           
        </div>
    )
}

export default RestarantCard;

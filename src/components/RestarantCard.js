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
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo} = resData?.info;
    
    return(
        <div className="restro-card" style={styleCard}>
            <img className="rescard-img" alt="rescardImg" src={ CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <p style={textStyle}>{cuisines.join(", ")}</p>
            <p style={textStyle}>{avgRating} Stars</p>
            <p style={textStyle}>{costForTwo}</p>
        </div>
    )
}

export default RestarantCard;

import { CDN_URL } from "../utils/constants";

const WhatsOnMind = (props) => {
    const {imageId} = props.itemList;
    return(
        <img src={CDN_URL + imageId} className="item-img"/> 
    )
}

export default WhatsOnMind;
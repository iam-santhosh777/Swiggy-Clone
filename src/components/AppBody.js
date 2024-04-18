import RestarantCard, {RestraCardOpenStatus} from "./RestarantCard";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./ShimmerUI";
import WhatsOnMind from "./WhatsOnMind";
import {Link} from "react-router-dom";
// import WhatsOnMind from "./WhatsOnMind";
import useAppBody from "../utils/useAppBody";
import useApiBody from "../utils/useAppBody";
import {RESTAURANT_LIST_API} from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
const AppBody = () => {

    // State Variable = super power variable
    const [listOfRestaurnts, setListOfRestaurnts] = useState([]);
    const [filteredRestra, setFilteredRestra] = useState([]);
    const [whatsonmind, setWhatsOnMind] = useState([]);
    const [searchText, setSearchText] = useState("");

    // const RestarantCardStatusText = RestarantCardStatus(RestarantCard);
    const IsRestrarauntOpenedStatus = RestraCardOpenStatus(RestarantCard);

    // console.log("Body rendered", listOfRestaurnts);
    //const apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const apiUrl = RESTAURANT_LIST_API;
    const { data: apiData, loading, error } = useApiBody(apiUrl);

    useEffect(() => {
    if (apiData) {
        setListOfRestaurnts(apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestra(apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setWhatsOnMind(apiData?.data?.cards[0].card?.card?.gridElements?.infoWithStyle?.info);
    }
    }, [apiData]);

    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus === false) {
        return <h1>Looks like you're Offline!!! Please check your internet connection</h1>
    }

    const {setUserName, loggedInUser} = useContext(UserContext);
    
    return listOfRestaurnts.length === 0 ? (<Shimmer />) : (
        <div className="app-body">
            <div>
            <h3 className="p-3 ml-4 text-gray-800 text-lg"><span className="text-green-700 font-bold text-2xl">Chandu</span>, What's on your Mind?</h3>
            <div className="flex overflow-auto no-scrollbar mx-4">
            <div className="w-40 flex gap-4">
            {
                whatsonmind.map((item, index) => {
                    return(
                        <WhatsOnMind key={index} itemList = {item}/>
                    )
                })
            }
            </div>
            </div>
            </div>
            <div className="filter">
            <div className="flex justify-center">
                <input type="text" className="border-black border-2 rounded-md mx-10" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>
                <button data-testid="search-btn" onClick={() => {
                    // filter the restaraunt cards and update the UI
                    // search txt
                    const fileredRestra = listOfRestaurnts.filter(
                        (restra) => restra.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilteredRestra(fileredRestra);
                    if (fileredRestra.length === 0) {
                        alert("Search item not found");
                        // clear the input field
                        setSearchText("");
                        setFilteredRestra(listOfRestaurnts);
                    } 
                }} className="bg-green-200 px-4 py-1 rounded-lg">Search</button>

                <button className="bg-blue-200 px-4 py-1 rounded-lg mx-4" onClick={() => {
                    // filter logic to show above 4 star rating restaraunts only
                    const filteredList = listOfRestaurnts.filter((res) => res.info.avgRating > 4);
                    // console.log(filteredList);
                    //setListOfRestaurnts(filteredList);
                    setFilteredRestra(filteredList);
                }}>Top Rated Restaurants</button>
                {/* <label>User Name: </label>
                <input className="border-black border rounded-md mx-10 px-2" onChange={(e) => {setUserName(e.target.value)}} value={loggedInUser}/> */}
            </div>
                 
            </div>
            <div className="flex mx-10 flex-wrap">
                {
                    filteredRestra.map((restra) => {
                        return(
                            <Link 
                            key={restra.info.id} 
                            to={"/restraraunts/" + restra.info.id}>
                                
                                {
                                    /**if restraraunt is opened then show open label on it */
                                    restra.info.isOpen ? <IsRestrarauntOpenedStatus resData = {restra}/> : <RestarantCard resData = {restra}/>
                                }
                                
                                {/* <RestarantCard resData={restra} /> */}
                                </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AppBody;
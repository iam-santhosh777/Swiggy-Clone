import RestarantCard from "./RestarantCard";
import {resObj} from "../utils/apiData";

import {useState, useEffect} from "react";
import Shimmer from "./ShimmerUI";
import WhatsOnMind from "./whatsOnMind";
import {Link} from "react-router-dom";
// import WhatsOnMind from "./WhatsOnMind";

const AppBody = () => {

    // State Variable = super power variable
    const [listOfRestaurnts, setListOfRestaurnts] = useState([]);
    const [filteredRestra, setFilteredRestra] = useState([]);
    const [whatsonmind, setWhatsOnMind] = useState([]);
    const [searchText, setSearchText] = useState("");
    // console.log("Body rendered");
    

    // const listOfRestaurnts = arr[0];
    // const setListOfRestaurnts = arr[1];

    // console.log(listOfRestaurnts);
    // console.log(setListOfRestaurnts);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.1350091&lng=79.62879149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json();

        console.log(jsonData);
        
        // Optional Chaining 
        setListOfRestaurnts(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestra(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setWhatsOnMind(jsonData?.data?.cards[0].card?.card?.gridElements?.infoWithStyle?.info);
        // console.log(jsonData);
    }
    
    return listOfRestaurnts.length === 0 ? (<Shimmer />) : (
        <div className="app-body">
            <div className="whatsonmind-container">
            <h3 className="whatonmind-text">Chandu, What's on your Mind?</h3>
                
            <div className="items-list">
            {
                whatsonmind.map((item, index) => {
                    return(
                        <WhatsOnMind key={index} itemList = {item}/>
                    )
                    
                })
            }
            </div>
            </div>
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>
                <button onClick={() => {
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
                
                    
                }}>Search</button>

            </div>
                <button className="filter-btn" onClick={() => {
                    // filter logic to show above 4 star rating restaraunts only
                    const filteredList = listOfRestaurnts.filter((res) => res.info.avgRating > 4);
                    console.log(filteredList);
                    //setListOfRestaurnts(filteredList);
                    setFilteredRestra(filteredList);
                }}>Top Rated Restaurants</button>
                
            </div>
            <div className="restro-container">
                {
                    filteredRestra.map((restra) => {
                        return(
                            <Link key={restra.info.id} to={"/restraraunts/" + restra.info.id}><RestarantCard resData={restra} /></Link>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default AppBody;
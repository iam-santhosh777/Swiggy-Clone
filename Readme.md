# classs notes
# CLASS - 5: Let's Get Hooked

1) the best practice is to make the separate files for each component - 

=> all the main code in the react library or project should be placed in src folder - means like a kind of source

2) we can use file extension  .jsx instead of .js because React understands it. It will treat it as JSX code and compile it into JavaScript before running in a browser.

# React Hooks
(Normal JS utility Functions)
- useState() - super powerfull state variable in react, but we should this as named import
- useEffect()

IMP: whenever a state variable updated react rerenders the component


# how do we resolve a promise

there are two ways for this
1) traditional way of using this .then and this.catch inside then block
2) async/await syntax

# what is CORS policy 
Basically Calling an API from swiggy.com to our local host has been blocked by brower Due to it's CORS policy

here. our browser not allowed us to calling that api from one origin to different origin. 
- if origin mismatch then automatically chrome browser will blocks that api call.this is called CORS policy
- CORS means - Cross Origin Resources Sharing 


# no about CORS policy with help of akshay video
# know about optional chaining (?)

IMP
- in today's world there is a concept of Shimmer Ui widly used in loading instead of spinners. it is a better to show loading state 
eg: linkedin, swiggy, facebook, youtube, netflix, are using shimmer ui effect which shows loading screen while data is fetching.
- it will enhance user experience even more
- when user sees a shimmer Ui. it make make some psychological impact on them
- we're giving a fake impression on UI

===> hooks is a kind of utility function  which helps us to write less code and clean code, they are like helper functions


date: 28/02/2024
const { name, cuisines, costForTwoMessage, areaName, avgRatingString } = resInfo?.cards[0]?.card?.card?.info;
  // console.log(resInfo?.cards[0].card.card.info);
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

# Know about immer

# setting up Testing in our App
 - install React Testing Library
 - Installed Jest
 - Installed Babel dependencies
 - Configure Babel
 - Configure Parcel Config file to disable default babel transpilation
 - Jest - npx jest -- init
 - Install Jsdom Library
 - install @babel/preset-react to make jsx work in test cases
 - include @babel/preset-react inside my babel configuration


# some extra stuff

_ _ => is called 'dunder' the meaning itself says "double underscore" (__dunder__)



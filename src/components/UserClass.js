import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myInfo: {
                name: "some epic name",
                location: "some epic location",

                avatar_url: ""
            }
        }

        console.log(this.props.name + "class constructor called");
    }

    async componentDidMount(){
        const fetchData = await fetch("https://api.github.com/users/mallikarjun92");
        const responseData = await fetchData.json();
        console.log(responseData);
        this.setState({
            myInfo: responseData
        })
        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }
    render(){
        const {name, location, avatar_url} = this.state.myInfo;
        console.log(this.props.name + "class render called");
        
        // debugger;
        return(
            <div className="user-class">
                
                <h1>{name}</h1>
                <img src={avatar_url} className="my-profile"/>
                <h4>React Developer</h4>
                <p>9/10</p>
                <h3>{location}</h3>

            </div>
        )
    }
}

export default UserClass;

// Home work by askhay 
/**
 * Why do we use super in constructor React?
    A. In ReactJS super call other constructor methods that is instantiated. 
    In ReactJS, it is used to access parent properties and methods from the child components. 
    It is used in an overridden method in react
 */
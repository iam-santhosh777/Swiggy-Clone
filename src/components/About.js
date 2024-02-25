import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor Called");
    }
    componentDidMount(){
        console.log("Parent ComponentDidMount Called");
    }
    render(){
        console.log("Parent Render Called");
        return(
            <div className="about-us-section">
                <h1>About Us</h1>
                <h2>this is done by santhosh kumar kodepaka</h2>
                <div className="user-containers">
            
                    <UserClass name={"Santhosh kumar"} location={"Suryapet"}/>
                
                </div>
            </div>
        )
    }
}


// const About = () => {
//     return(
//         <div className="about-us-section">
//             <h1>About Us</h1>
//             <h2>this is done by santhosh kumar kodepaka</h2>
//             <div className="user-containers">
//             <div>
//                 <User name={"Santhosh Kumar"} location={"Hyderabad"} />
//             </div>
//             <div>
//                 <UserClass name={"chandu"} location={"Suryapet"}/>
//             </div>
//             </div>
//         </div>
//     )
// }

export default About;
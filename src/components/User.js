import {useState} from "react";

const User = (props) => {
    const {name, location} = props;
    const [count, setCount] = useState(0);
    return(
        <div className="user-class">
            <h1> {name} </h1>
            <h4> UI / UX Developer </h4>
            <p> 9/10 </p>
            <h3>{location}</h3>

        </div>
    )
}

export default User;
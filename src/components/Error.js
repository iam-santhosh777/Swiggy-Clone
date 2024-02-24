import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Opps!!! Something went wrong</h1>
            <h2>404 Not Found: {err.data}</h2>
            <Link to="/"><button>Go Back Home </button></Link>
            
        </div>

    )
}

export default Error;
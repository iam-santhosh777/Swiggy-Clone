import { useEffect, useState } from "react";
const useOnlineStatus = () => {

    const [onlineStatus, setOnlinesStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", (event) => {
            setOnlinesStatus(false);
          });

          window.addEventListener("online", (online) => {
            setOnlinesStatus(true);
          });
    
    }, [])

    return onlineStatus;
}

export default useOnlineStatus;
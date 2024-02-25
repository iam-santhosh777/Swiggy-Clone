import { useEffect, useState } from "react";
import { Menu_API } from "./constants";

const useRestarauntMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    // Get restaurant information by ID.

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch(Menu_API + resId);
        const responseData = await response.json();
        setResInfo(responseData.data);
    }

    return resInfo
}

export default useRestarauntMenu;
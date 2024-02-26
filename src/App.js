import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestrarauntMenu from "./components/RestrarauntMenu";
import{createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
// import Grocery from "./components/Grocery";
// import Grocery from "./components/Grocery";

// chunking
// code splitting
// dynamic bundling
// css modules
// tree shaking
// lazy loading
// on demand loading
// dynamic import


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    return (
        <div className="app">
            <AppHeader />
            <Outlet />    
            {/* <About /> */}
            <Footer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <AppBody />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}> <About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>
            },
            {
                path: "/restraraunts/:resId",
                element: <RestrarauntMenu />
            }
    
        ],
        errorElement: <Error />
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
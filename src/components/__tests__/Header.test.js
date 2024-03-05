import {fireEvent, render, screen} from "@testing-library/react";
import AppHeader from "../AppHeader";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with a login button", () => {
    render(
    <BrowserRouter >
    <Provider store={appStore}>
        <AppHeader />
    </Provider>
    </BrowserRouter>
    );  //rendering

    // this is one way to find button -- best way
    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
    
    // this is another way to find button -- if we can't find button by role then by text
    // const loginButton = screen.getByText("Login");
    // expect(loginButton).toBeInTheDocument();

})

it("should render header component with cart Items 0", () => {
    render(
    <BrowserRouter >
    <Provider store={appStore}>
        <AppHeader />
    </Provider>
    </BrowserRouter>
    );  //rendering

    const cartItems = screen.getByText("Cart - (0 Items)");

    expect(cartItems).toBeInTheDocument();
})

it("should render header component with a cart Items", () => {
    render(
    <BrowserRouter >
    <Provider store={appStore}>
        <AppHeader />
    </Provider>
    </BrowserRouter>
    );  //rendering

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
})

it("should change login button to logout button on click", () => {
    render(
        <BrowserRouter >
        <Provider store={appStore}>
            <AppHeader />
        </Provider>
        </BrowserRouter>
        );  //rendering

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})
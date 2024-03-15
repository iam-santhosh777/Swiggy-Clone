import { act } from "react-dom/test-utils";
import RestrarauntMenu from "../RestrarauntMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import AppHeader from "../AppHeader";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import AppCart from "../AppCart";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME)
        
    })
);



it("Should Load Restaurant Menu Component", async () =>{
    await act(async () => render(
    <BrowserRouter>
    <Provider store={appStore}>
        <AppHeader />
        <RestrarauntMenu />
        <AppCart />
    </Provider>
    </BrowserRouter>));

    const accordionHeader = screen.getByText("Breads (10)")
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(10);

    expect(screen.getByText("Cart - (0 Items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[1]);


    expect(screen.getByText("Cart - (1 Items)")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}))
    
})
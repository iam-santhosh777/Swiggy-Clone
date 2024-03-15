import { fireEvent, render, screen } from "@testing-library/react"
import AppBody from "../AppBody";
import {act} from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
   return Promise.resolve({
        json: () => { 
            return Promise.resolve(MOCK_DATA);
         },
    });
});


it("should search res list for cake text input", async () => {
    
    await act(async () => render(
    <BrowserRouter>
    <AppBody/>
    </BrowserRouter>
    )); 

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    // const searchBtn = screen.getByRole("button", {name: "Search"});
    
    // const searchInput = screen.getByTestId("search-btn");
    
    // fireEvent.change(searchInput, { target: { value:"cake" } });
    
    // fireEvent.click(searchBtn);

    // const cardsAfterSearch = screen.getAllByTestId("resCard");
    
    // expect(cardsAfterSearch.length).toBe(2);
    // // Assertion - Screen should load one card
    // const cards = screen.getAllByTestId("resCard");
    // expect(cards).toHaveLength(1);
    
})

it("should filter top rated restra", async () => {
    
    await act(async () => render(
    <BrowserRouter>
    <AppBody/>
    </BrowserRouter>
    )); 

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(15);

    
})


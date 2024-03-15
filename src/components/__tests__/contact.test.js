import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Component test cases", () => {

    // afterAll(() => {
    //     console.log("after all test cases")
    // })

    // afterEach(() => {
    //     console.log("after each test case")
    // })

    // beforeAll(() => {
    //     console.log("before all test cases")
    // })

    // beforeEach(() => {
    //     console.log("before each test case")
    // })

    

    it("should load contact us component", () => {
        render(<Contact/>)
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button inside my contact us component", () => {
        render(<Contact/>)
    
        const button = screen.getByRole("button"); // this is one way to find button
        //const button = screen.getByText("Submit"); // this is another way to find button
        
    
        // Assertion
        expect(button).toBeInTheDocument();
    })
    
    it("should load input inside my contact us component", () => {
        render(<Contact />)
    
        // const inputName = screen.getByPlaceholderText("Name");
        const inputName = screen.getByPlaceholderText("Name", "Email");
        expect(inputName).toBeInTheDocument();
    
    })
    
    test("contact us page should load three input boxes", () => {
        
        // reder
        render(<Contact />)
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        // Assertion
        // expect(inputBoxes).toHaveLength(3);
        expect(inputBoxes.length).not.toBe(1);
        // console.log(inputBoxes);
    })
})
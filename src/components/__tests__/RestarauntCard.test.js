import { render, screen } from "@testing-library/react"
import RestarantCard, {RestraCardOpenStatus} from "../RestarantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render Restaraunt Card component with props Data", () => {
    render(<RestarantCard resData={MOCK_DATA}/>)
    
    const name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument();
})

// Mock component for testing
const MockRestarauntCard = () => <label data-testid="mock-card">Opened</label>;

it("should render RestarauntCard component with open status prop", () => {
  // Apply the HOC to the mock component
  const HOCComponent = RestraCardOpenStatus(MockRestarauntCard);
  
  // Render the wrapped component with the HOC
  render(<HOCComponent isOpen={true} resData={MOCK_DATA} />);
  
  // Check if the open status prop is passed to the HOC component
  const mockCard = screen.getByTestId("mock-card");
  expect(mockCard).toBeInTheDocument();
});
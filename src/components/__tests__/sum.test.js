import { sum } from "../sum";

test("it should add two numbers", () => {
    // condition
    const result = sum(123, 457);

    // expectation (or Assertion)
    expect(123+457).toBe(580);

})
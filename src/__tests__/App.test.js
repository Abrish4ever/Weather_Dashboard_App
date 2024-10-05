import { getByTestId, render, screen } from "@testing-library/react";
import { App } from '../App';
import "@testing-library/jest-dom";


test('Always true test', () => {
    expect(true).toBe.true;
});
test("renders Weather app", () => {
  render(<App />);
  expect(getByTestId("WeatherApp-container")).toBeInTheDocument();
});


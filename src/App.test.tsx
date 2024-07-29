import { screen, render } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("renders the correct initial title", () => {
    render(<App />);
    const title = screen.getByText("Vite + React");
    expect(title).toBeInTheDocument();
  });
});

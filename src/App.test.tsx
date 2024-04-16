import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App>", () => {
  test("should render component", () => {
    render(<App />);
    expect(screen.queryByText(/realizar prueba/i)).toBeInTheDocument();
  });
});

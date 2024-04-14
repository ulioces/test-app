import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("@/components/buttons-group/ButtonsGroup", () => ({
  default: () => <div>test</div>,
}));

describe("<App>", () => {
  test("should render component", () => {
    render(<App />);
    expect(screen.queryByText("test")).not.toBeNull();
  });
});

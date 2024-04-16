import { Questions } from "./Questions";
import { render, screen } from "@testing-library/react";

jest.mock("@/types");
jest.mock("./components/Question");

describe("<Questions>", () => {
  test("should render component", () => {
    render(<Questions markCorrect={true} questions={[]} description="title" />);
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import { Result } from "./Results";

jest.mock("@/constants");
jest.mock("@/types");
jest.mock("@/components/questions/Questions");
jest.mock("./result.css");

describe("<Result>", () => {
  test("should render component", () => {
    render(
      <Result answers={{ title: "", questions: [] }} onClickBack={jest.fn()} />
    );
    expect(screen.getByText(/resultado/i)).toBeInTheDocument();
  });

  test("should shown note correct", async () => {
    render(
      <Result
        answers={{
          title: "",
          questions: [
            { id: 1, question: "q1", correct: 1, options: [], select: 1 },
            { id: 2, question: "q2", correct: 2, options: [], select: 1 },
            { id: 3, question: "q3", correct: 2, options: [], select: 1 },
          ],
        }}
        onClickBack={jest.fn()}
      />
    );

    expect(screen.getByText(/3.33/i)).toBeInTheDocument();
  });

  test("should call back function", async () => {
    const mockFnBack = jest.fn();
    render(
      <Result
        answers={{
          title: "",
          questions: [],
        }}
        onClickBack={mockFnBack}
      />
    );
    const repeat = screen.getByTestId("test-repeat");

    expect(repeat).toBeInTheDocument();

    fireEvent.click(repeat);
    expect(mockFnBack).toHaveBeenCalled();
  });
});

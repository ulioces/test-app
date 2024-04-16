import { Question } from "./Question";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("@/types");
jest.mock("./question.css");

describe("<Question>", () => {
  test("should render component", () => {
    render(
      <Question
        markCorrect={false}
        question={{
          id: 1,
          question: "question",
          correct: 1,
          options: [{ label: "label1", value: 1 }],
        }}
      />
    );
    expect(screen.getByText(/question/i)).toBeInTheDocument();
  });

  test("should mark correct answer", () => {
    render(
      <Question
        question={{
          id: 1,
          question: "question",
          correct: 1,
          options: [{ label: "label1", value: 1 }],
        }}
        markCorrect={true}
        select={1}
      />
    );

    expect(screen.getByTestId("test-div-question")).toHaveClass(
      "question-container__option answers-correct"
    );
  });

  test("should mark incorrect answer", () => {
    render(
      <Question
        question={{
          id: 1,
          question: "question",
          correct: 2,
          options: [
            { label: "label1", value: 1 },
            { label: "label2", value: 2 },
          ],
        }}
        markCorrect={true}
        select={1}
      />
    );

    expect(screen.getAllByTestId("test-div-question")[0]).toHaveClass(
      "question-container__option answers-error"
    );

    expect(screen.getAllByTestId("test-div-question")[1]).toHaveClass(
      "question-container__option"
    );
  });

  test("should call change event", async () => {
    const mockOnChange = jest.fn();
    render(
      <Question
        markCorrect={false}
        question={{
          id: 1,
          question: "question",
          correct: 1,
          options: [{ label: "label1", value: 1 }],
        }}
        onChange={mockOnChange}
      />
    );

    const check = screen.getByLabelText("label1");
    await fireEvent.click(check);
    expect(mockOnChange).toHaveBeenCalled();
  });
});

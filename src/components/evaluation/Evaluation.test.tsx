import { fireEvent, render, screen } from "@testing-library/react";
import { Evaluation } from "./Evaluation";
import {
  mockQuestionsCompleted,
  mockQuestionsIncompleted,
} from "@/test/__ mocks __/testMocks";
import { initQuestions } from "./utils/evaluation.utils";

jest.mock("@/constants");
jest.mock("@/mocks");
jest.mock("./utils/evaluation.utils", () => ({
  initQuestions: jest.fn(),
}));
jest.mock("@/types");
jest.mock("@/components/questions/Questions");
jest.mock("./evaluation.css");

describe("<Evaluation>", () => {
  test("should render component", () => {
    (initQuestions as jest.Mock).mockReturnValue(mockQuestionsIncompleted);
    render(<Evaluation onSend={jest.fn()} />);

    const buttonSend = screen.getByRole("button", { name: /finalizar/i });
    expect(buttonSend).toBeDisabled();

    expect(buttonSend).toBeInTheDocument();
  });
  test("should call submit function", async () => {
    (initQuestions as jest.Mock).mockReturnValue(mockQuestionsCompleted);
    const mockFn = jest.fn();
    render(<Evaluation onSend={mockFn} />);

    const buttonSend = screen.getByRole("button", { name: /finalizar/i });

    expect(buttonSend).not.toBeDisabled();
    await fireEvent.click(buttonSend);

    expect(mockFn).toHaveBeenCalled();
  });
});

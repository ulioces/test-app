import { render, screen } from "@testing-library/react";
import ButtonGroup from "./ButtonsGroup";

jest.mock("@/constants");
jest.mock("./buttonsGroup.css");

describe("<ButtonGroup>", () => {
  test("should render component", () => {
    const mockOnClickEvaluation = jest.fn();
    const mockonClickResult = jest.fn();
    render(
      <ButtonGroup
        onClickEvaluation={mockOnClickEvaluation}
        onClickResult={mockonClickResult}
        disabledButtonResult={true}
      />
    );
    const buttonResult = screen.getByRole("button", {
      name: /resultado de test/i,
    });
    const buttonEvaluation = screen.getByRole("button", {
      name: /realizar prueba/i,
    });
    expect(buttonResult).toBeDefined();
    expect(buttonEvaluation).toBeDefined();
  });

  test("should be the result button", () => {
    const mockOnClickEvaluation = jest.fn();
    const mockonClickResult = jest.fn();
    render(
      <ButtonGroup
        onClickEvaluation={mockOnClickEvaluation}
        onClickResult={mockonClickResult}
        disabledButtonResult={false}
      />
    );
    const buttonEvaluation = screen.getByRole("button", {
      name: /realizar prueba/i,
    });
    expect(buttonEvaluation).toBeDisabled();
  });

  test("should be the evaluation button", () => {
    const mockOnClickEvaluation = jest.fn();
    const mockonClickResult = jest.fn();
    render(
      <ButtonGroup
        onClickEvaluation={mockOnClickEvaluation}
        onClickResult={mockonClickResult}
        disabledButtonResult={true}
      />
    );
    const buttonEvaluation = screen.getByRole("button", {
      name: /resultado de test/i,
    });
    expect(buttonEvaluation).toBeDisabled();
  });
});

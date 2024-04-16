import { fireEvent, render, screen } from "@testing-library/react";
import ButtonGroup from "./ButtonsGroup";

jest.mock("@/constants");
jest.mock("./buttonsGroup.css");

describe("<ButtonGroup>", () => {
  test("should render component", () => {
    render(
      <ButtonGroup
        onClickEvaluation={jest.fn()}
        onClickResult={jest.fn()}
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

  test("should be disabled the result button", () => {
    render(
      <ButtonGroup
        onClickEvaluation={jest.fn()}
        onClickResult={jest.fn()}
        disabledButtonResult={false}
      />
    );
    const buttonEvaluation = screen.getByRole("button", {
      name: /realizar prueba/i,
    });
    expect(buttonEvaluation).toBeDisabled();
  });

  test("should be disabled the evaluation button", () => {
    render(
      <ButtonGroup
        onClickEvaluation={jest.fn()}
        onClickResult={jest.fn()}
        disabledButtonResult={true}
      />
    );
    const buttonResult = screen.getByRole("button", {
      name: /resultado de test/i,
    });
    expect(buttonResult).toBeDisabled();
  });

  test("should call result funtion", async () => {
    const mockFnResult = jest.fn();
    render(
      <ButtonGroup
        onClickEvaluation={jest.fn()}
        onClickResult={mockFnResult}
        disabledButtonResult={false}
      />
    );
    const buttonResult = screen.getByRole("button", {
      name: /resultado de test/i,
    });
    await fireEvent.click(buttonResult);

    expect(mockFnResult).toHaveBeenCalled();
  });

  test("should call evaluation funtion", async () => {
    const mockFnEvaluation = jest.fn();
    render(
      <ButtonGroup
        onClickEvaluation={mockFnEvaluation}
        onClickResult={jest.fn()}
        disabledButtonResult={true}
      />
    );
    const buttonEv = screen.getByRole("button", {
      name: /realizar prueba/i,
    });
    await fireEvent.click(buttonEv);

    expect(mockFnEvaluation).toHaveBeenCalled();
  });
});

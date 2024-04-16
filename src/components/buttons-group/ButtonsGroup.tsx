import { texts } from "@/constants";

import "./buttonsGroup.css";

interface Props {
  onClickEvaluation: () => void;
  onClickResult: () => void;
  disabledButtonResult: boolean;
}

export const ButtonGroup = (props: Props) => {
  const { onClickEvaluation, onClickResult, disabledButtonResult } = props;
  return (
    <section className="button-group-section">
      <button
        type="button"
        disabled={!disabledButtonResult}
        onClick={onClickEvaluation}
      >
        {texts.BUTTON_GO_TO_EVALUATION}
      </button>
      <button
        type="button"
        disabled={disabledButtonResult}
        onClick={onClickResult}
      >
        {texts.BUTTON_GO_TO_RESULTS}
      </button>
    </section>
  );
};

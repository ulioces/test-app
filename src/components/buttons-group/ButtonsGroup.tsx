import { texts } from "@/constants";

import "./buttonsGroup.css";

interface Props {
  onClickEvaluation: () => void;
  onClickResult: () => void;
  disabledResult: boolean;
}

export const ButtonGroup = (props: Props) => {
  const { onClickEvaluation, onClickResult, disabledResult } = props;
  return (
    <section className="button-group-section">
      <button
        type="button"
        disabled={!disabledResult}
        onClick={onClickEvaluation}
      >
        {texts.BUTTON_GO_TO_EVALUATION}
      </button>
      <button type="button" disabled={disabledResult} onClick={onClickResult}>
        {texts.BUTTON_GO_TO_RESULTS}
      </button>
    </section>
  );
};

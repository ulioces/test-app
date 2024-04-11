import { useState } from "react";
import "./App.css";
import { ButtonGroup } from "./components/buttons-group/ButtonsGroup";
import Evaluation from "./components/evaluation/Evaluation";
import { Result } from "./components/results/Results";
import { TestType, View, VIEWS_TYPES } from "./types";

function App() {
  const [showView, setShowView] = useState<View>(VIEWS_TYPES.MAIN);
  const [testAnswers, setTestAnswers] = useState<TestType | null>(null);

  const handleSubmitEvaluation = (newAnswers: TestType) => {
    setTestAnswers(newAnswers);
    setShowView(VIEWS_TYPES.MAIN);
  };

  const viewComponent = () => {
    switch (showView) {
      case VIEWS_TYPES.EVALUATION:
        return <Evaluation onSend={handleSubmitEvaluation} />;
      case VIEWS_TYPES.RESULT:
        return <Result answers={testAnswers!} />;
      case VIEWS_TYPES.MAIN:
        return (
          <ButtonGroup
            disabledResult={!testAnswers}
            onClickEvaluation={() => setShowView(VIEWS_TYPES.EVALUATION)}
            onClickResult={() => setShowView(VIEWS_TYPES.RESULT)}
          />
        );
      default:
        <></>;
    }
  };

  return <main>{viewComponent()}</main>;
}

export default App;

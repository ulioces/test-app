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

  return (
    <>
      {showView === VIEWS_TYPES.EVALUATION && (
        <Evaluation onSend={handleSubmitEvaluation} />
      )}
      {showView === VIEWS_TYPES.RESULT && <Result answers={testAnswers!} />}
      {showView === VIEWS_TYPES.MAIN && (
        <ButtonGroup
          disabledResult={!testAnswers}
          onClickEvaluation={() => setShowView(VIEWS_TYPES.EVALUATION)}
          onClickResult={() => setShowView(VIEWS_TYPES.RESULT)}
        />
      )}
    </>
  );
}

export default App;

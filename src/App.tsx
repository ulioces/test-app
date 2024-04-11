import { useState } from "react";
import "./App.css";
import Evaluation from "./components/evaluation/Evaluation";
import { FormValue, TestType, View, VIEWS_TYPES } from "./types";
import { Result } from "./components/results/Results";
import { ButtonGroup } from "./components/buttons-group/ButtonsGroup";

function App() {
  const [showView, setShowView] = useState<View>(VIEWS_TYPES.MAIN);
  const [answers, setAnswers] = useState<TestType | null>(null);

  const handleSubmitEvaluation = (newAnswers: TestType) => {
    setAnswers(newAnswers);
    setShowView(VIEWS_TYPES.MAIN);
  };

  return (
    <>
      {showView === VIEWS_TYPES.EVALUATION && (
        <Evaluation onSend={handleSubmitEvaluation} />
      )}
      {showView === VIEWS_TYPES.RESULT && <Result answers={answers!} />}
      {showView === VIEWS_TYPES.MAIN && (
        <ButtonGroup
          disabledResult={!answers}
          onClickEvaluation={() => setShowView(VIEWS_TYPES.EVALUATION)}
          onClickResult={() => setShowView(VIEWS_TYPES.RESULT)}
        />
      )}
    </>
  );
}

export default App;

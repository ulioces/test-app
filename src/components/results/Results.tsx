import { texts } from "@/constants";
import { TestType } from "@/types";
import { Questions } from "@/components/questions/Questions";
import "./result.css";

interface Props {
  answers: TestType;
  onClickBack: () => void;
}

export const Result = (props: Props) => {
  const { answers, onClickBack } = props;

  const getResult = (): string => {
    const correctCount = answers.questions.reduce(
      (result, elem) => (elem.correct === elem.select ? result + 1 : result),
      0
    );
    const result = (10 * correctCount) / answers.questions.length;
    return result % 1 ? result.toFixed(2) : result.toString();
  };

  return (
    <section className="result-section">
      <h3>{texts.TITLE_RESULTS}</h3>
      <Questions
        description={answers.title}
        markCorrect={true}
        questions={answers.questions}
      />
      <div className="result-section__result">
        {texts.NOTA}
        <span>{getResult()}</span>
      </div>
      <div
        className="result-section__retry"
        data-testid="test-repeat"
        onClick={onClickBack}
      >
        {texts.REPEAT}
      </div>
    </section>
  );
};

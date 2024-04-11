import { texts } from "../../constants";
import { TestType } from "../../types";
import { Questions } from "../questions/Questions";

interface Props {
  answers: TestType;
}
export const Result = (props: Props) => {
  const { answers } = props;
  return (
    <>
      <p>{texts.TITLE_RESULTS}</p>
      <Questions
        description={answers.title}
        markCorrect={true}
        questions={answers.questions}
      />
    </>
  );
};

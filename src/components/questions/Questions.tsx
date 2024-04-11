import { QuestionType } from "../../types";
import { Question } from "./components/Question";

interface Props {
  markCorrect?: boolean;
  questions: QuestionType[];
  onChange?: (id: number, value: number) => void;
  description: string;
}

export const Questions = (props: Props) => {
  const { questions, markCorrect = false, onChange, description } = props;

  return (
    <>
      <p>{description}</p>
      {questions.map((question: QuestionType) => (
        <Question
          key={question.id}
          question={question}
          select={question.select}
          markCorrect={markCorrect}
          onChange={onChange}
        />
      ))}
    </>
  );
};

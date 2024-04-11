import { FormValue } from "../../types";
import { Question } from "./components/Question";

interface Props {
  markCorrect?: boolean;
  questions: FormValue[];
  onChange?: (id: number, value: number) => void;
  description: string;
}

export const Questions = (props: Props) => {
  const { questions, markCorrect = false, onChange, description } = props;

  return (
    <>
      <p>{description}</p>
      {questions.map((question: FormValue) => (
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

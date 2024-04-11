import { OptionType, QuestionType } from "../../../types";
import "./question.css";

interface Props {
  question: QuestionType;
  onChange?: (id: number, value: number) => void;
  select: number | null;
  markCorrect: boolean;
}

export const Question = (props: Props) => {
  const { question, onChange, select, markCorrect } = props;

  const handleChange = (event: any) => {
    onChange && onChange(question.id, parseInt(event.target.value));
  };

  const getClass = (option: OptionType, correct: number): string => {
    if (markCorrect) {
      if (option.value === correct) {
        return "question__ansewrs-correct";
      } else if (option.value === select) {
        return "question__ansewrs-error";
      }
    }
    return "";
  };

  return (
    <div>
      <p>{question.question}</p>
      {question.options.map((option: OptionType) => (
        <div key={option.value} className={getClass(option, question.correct)}>
          <input
            type="checkbox"
            name={option.label}
            value={option.value}
            checked={select == option.value}
            onChange={handleChange}
            disabled={markCorrect}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

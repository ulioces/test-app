import { OptionType, QuestionType } from "@/types";
import "./question.css";

interface Props {
  question: QuestionType;
  onChange?: (id: number, value: number) => void;
  select?: number | null;
  markCorrect: boolean;
}

export const Question = (props: Props) => {
  const { question, onChange, select, markCorrect } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(question.id, parseInt(event.target.value));
  };

  const getClass = (option: OptionType, correct: number): string => {
    let resultClass = "question-container__option";
    if (!markCorrect) return resultClass + " input-edit";

    if (option.value === select && select === correct)
      return resultClass + " answers-correct";
    if (option.value === select && select !== correct)
      return resultClass + " answers-error";

    return resultClass;
  };

  return (
    <div className="question-container">
      <h5>{question.question}</h5>
      <div className="question-container__options">
        {question.options.map((option: OptionType) => (
          <div
            key={option.value}
            className={getClass(option, question.correct)}
          >
            <label>
              <input
                type="checkbox"
                name={option.label}
                value={option.value}
                checked={select == option.value}
                onChange={handleChange}
                disabled={markCorrect}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

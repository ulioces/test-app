import { useMemo, useState } from "react";
import { texts } from "@/constants";
import { test } from "@/mocks";
import { QuestionType, TestType } from "@/types";
import { Questions } from "@/components/questions/Questions";
import { initQuestions } from "./utils/evaluation.utils";
import "./evaluation.css";
interface Props {
  onSend: (a: TestType) => void;
}

export const Evaluation = (props: Props) => {
  const { onSend } = props;

  const [form, setForm] = useState<QuestionType[]>(() => initQuestions(test));

  const completed = useMemo(
    () => form.every((item: QuestionType) => item.select),
    [form]
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSend({ ...test, questions: form });
  };

  const handleChange = (id: number, value: number) => {
    const newForm = form.map((item: QuestionType) => ({
      ...item,
      select: id === item.id ? value : item.select,
    }));
    setForm(newForm);
  };

  return (
    <section className="evaluation-section">
      <h3>{texts.TITLE_EVALUATION}</h3>
      <form onSubmit={handleSubmit}>
        <Questions
          description={test.title}
          questions={form}
          onChange={handleChange}
        />
        <button
          className="evaluation-section__button"
          type="submit"
          disabled={!completed}
        >
          {texts.BUTTON_FINISH_EVALUATION}
        </button>
      </form>
    </section>
  );
};

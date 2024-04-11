import React, { useMemo, useState } from "react";
import { FormValue, QuestionType, TestType } from "../../types";
import { Questions } from "../questions/Questions";
import { texts } from "../../constants";
import { test } from "../../mocks";

interface Props {
  onSend: (a: TestType) => void;
}

const Evaluation = (props: Props): React.ReactNode => {
  const { onSend } = props;

  const [form, setForm] = useState((): FormValue[] =>
    test.questions.map((question: QuestionType) => ({
      ...question,
      select: null,
    }))
  );

  const completed = useMemo(
    () => form.every((item: FormValue) => item.select),
    [form]
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSend({ ...test, questions: form });
  };

  const handleChange = (id: number, value: number) => {
    const newForm = form.map(
      (item: FormValue) =>
        ({
          ...item,
          select: id === item.id ? value : item.select,
        } as FormValue)
    );
    setForm(newForm);
  };

  return (
    <>
      <p>{texts.TITLE_EVALUATION}</p>
      <form onSubmit={handleSubmit}>
        <Questions
          description={test.title}
          questions={form}
          onChange={handleChange}
        />
        <button type="submit" disabled={!completed}>
          {texts.BUTTON_FINISH_EVALUATION}
        </button>
      </form>
    </>
  );
};

export default Evaluation;

export type OptionType = {
  label: string;
  value: number;
};

export type QuestionType = {
  id: number;
  question: string;
  correct: number;
  options: OptionType[] | FormValue[];
};

export type TestType = {
  title: string;
  questions: QuestionType[];
};

export type FormValue = QuestionType & {
  select: number | null;
};

export const enum VIEWS_TYPES {
  EVALUATION = "EVALUATION_VIEW",
  MAIN = "MAIN_VIEW",
  RESULT = "RESULT_VIEW",
}

export type View =
  | VIEWS_TYPES.EVALUATION
  | VIEWS_TYPES.MAIN
  | VIEWS_TYPES.RESULT;

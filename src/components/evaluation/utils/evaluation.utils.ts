import { QuestionType, TestType } from "@/types";

export const initQuestions = (test: TestType): QuestionType[] => {
  return test.questions.map((question: QuestionType) => ({
    ...question,
    select: null,
  }));
};

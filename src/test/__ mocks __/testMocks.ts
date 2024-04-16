import { QuestionType } from "@/types";

export const mockQuestionsCompleted: QuestionType[] = [
  {
    id: 1,
    question: "Question1",
    correct: 1,
    select: 1,
    options: [
      {
        label: "option1",
        value: 1,
      },
      {
        label: "option 2",
        value: 2,
      },
    ],
  },
  {
    id: 2,
    question: "Question2",
    correct: 2,
    select: 2,
    options: [
      {
        label: "option1",
        value: 1,
      },
      {
        label: "option2",
        value: 2,
      },
    ],
  },
];

export const mockQuestionsIncompleted: QuestionType[] = [
  {
    id: 1,
    question: "Question1",
    correct: 1,
    select: null,
    options: [
      {
        label: "option1",
        value: 1,
      },
      {
        label: "option 2",
        value: 2,
      },
    ],
  },
  {
    id: 2,
    question: "Question2",
    correct: 2,
    select: 2,
    options: [
      {
        label: "option1",
        value: 1,
      },
      {
        label: "option2",
        value: 2,
      },
    ],
  },
];

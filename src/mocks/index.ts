import { TestType } from "@/types";

export const test: TestType = {
  title: "Seleccione verdadero o falso",
  questions: [
    {
      id: 1,
      question: "Question 1",
      correct: 1,
      options: [
        {
          label: "option 1",
          value: 1,
        },
        {
          label: "option 2",
          value: 2,
        },
        {
          label: "option 3",
          value: 3,
        },
      ],
    },
    {
      id: 2,
      question: "Question 2",
      correct: 2,
      options: [
        {
          label: "option 1",
          value: 1,
        },
        {
          label: "option 2",
          value: 2,
        },
      ],
    },
    {
      id: 3,
      question: "Question 3",
      correct: 2,
      options: [
        {
          label: "option 1",
          value: 1,
        },
        {
          label: "option 2",
          value: 2,
        },
      ],
    },
  ],
};

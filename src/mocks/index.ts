import { TestType } from "@/types";

export const test: TestType = {
  title: "Seleccione verdadero o falso",
  questions: [
    {
      id: 1,
      question:
        "Más del 50 % de la mortalidad infantil se debe al problema del hambre mundial.",
      correct: 1,
      options: [
        {
          label: "Verdadero",
          value: 1,
        },
        {
          label: "Falso",
          value: 2,
        },
      ],
    },
    {
      id: 2,
      question: "El organo mas pesado del cuerpo humano es el cerebro.",
      correct: 2,
      options: [
        {
          label: "Verdadero",
          value: 1,
        },
        {
          label: "Falso",
          value: 2,
        },
      ],
    },
    {
      id: 3,
      question:
        "La Universidad de Cambridge se fundó antes que el Machu Picchu.",
      correct: 1,
      options: [
        {
          label: "Verdadero",
          value: 1,
        },
        {
          label: "Falso",
          value: 2,
        },
      ],
    },
  ],
};

import { create } from "zustand";
import question from "../utils/questions.ts";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizState {
  currentQuestion: number;
  answers: (number | null)[];
  score: number;
  showScore: boolean;
  questions: Question[];

  selectAnswer: (optionIndex: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  currentQuestion: 0,
  answers: Array(10).fill(null),
  score: 0,
  showScore: false,
  questions: question,

  selectAnswer: (optionIndex) =>
    set((state) => {
      const answers = [...state.answers];
      answers[state.currentQuestion] = optionIndex;

      return { answers: answers };
    }),

  nextQuestion: () =>
    set((state) => {
      const isLastQuestion =
        state.currentQuestion === state.questions.length - 1;

      if (isLastQuestion) {
        let score = 0;

        state.questions.forEach((question, index) => {
          if (state.answers[index] === question.correctAnswer) {
            score++;
          }
        });

        return { showScore: true, score };
      }

      return { currentQuestion: state.currentQuestion + 1 };
    }),

  previousQuestion: () =>
    set((state) => ({
      currentQuestion: Math.max(state.currentQuestion - 1, 0),
    })),

  resetQuiz: () =>
    set(() => ({
      currentQuestion: 0,
      answers: Array(10).fill(null),
      score: 0,
      showScore: false,
    })),
}));

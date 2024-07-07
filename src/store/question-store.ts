import { create } from "zustand";

import { QuestionType } from "../../types";
import questions from "@/utils/questions_data";

type QuestionState = {
  questions: QuestionType[];
  userAnswer: string | undefined;
  totalQuestions: number;
  updateTotalQuestions: () => void;
  totalAnswered: number;
  updateTotalAnswered: () => void;
  isCorrect: boolean | undefined;
  setIsCorrect: (isCorrect: boolean) => void;
  currentQuestionIndex: number;
  tabIndex: number;
  updateTabIndex: (index: number) => void;
  updateCurrentQuestionIndex: () => void;
  resetQuestionIndex: () => void;
  addAnswer: ({ answer }: { answer: string }) => void;
  resetAnswers: () => void;
};

const useQuestionStore = create<QuestionState>((set) => ({
  questions: questions,
  userAnswer: undefined,
  totalQuestions: questions.length,
  updateTotalQuestions: () =>
    set((state) => ({ totalQuestions: state.totalQuestions - 1 })),
  totalAnswered: 0,
  updateTotalAnswered: () =>
    set((state) => ({ totalAnswered: state.totalAnswered + 1 })),
  isCorrect: undefined,
  setIsCorrect: (isCorrect) => set(() => ({ isCorrect: isCorrect })),
  currentQuestionIndex: 0,
  tabIndex: 0,
  updateTabIndex: (index) => set(() => ({ tabIndex: index })),
  updateCurrentQuestionIndex: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
      isCorrect: undefined,
      tabIndex: 0,
    })),
  resetQuestionIndex: () =>
    set(() => ({
      currentQuestionIndex: 0,
      answer: "",
    })),
  addAnswer: ({ answer }) =>
    set(() => ({
      userAnswer: answer,
    })),
  resetAnswers: () =>
    set({
      userAnswer: undefined,
      currentQuestionIndex: 0,
      totalAnswered: 0,
    }),
}));

export default useQuestionStore;

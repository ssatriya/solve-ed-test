import useQuestionStore from "@/store/question-store";
import questions from "@/utils/questions_data";
import { act, renderHook } from "@testing-library/react";

describe("useQuestionStore", () => {
  it("question value set to question json", () => {
    const { result } = renderHook(() => useQuestionStore());
    expect(result.current.questions).toEqual(questions);
  });

  it("question index start from 0", () => {
    const { result } = renderHook(() => useQuestionStore());
    expect(result.current.currentQuestionIndex).toEqual(0);
  });

  it("user answer is undefined before app start", () => {
    const { result } = renderHook(() => useQuestionStore());
    expect(result.current.userAnswer).toBeUndefined();
  });

  it("total answer is 0 before app start", () => {
    const { result } = renderHook(() => useQuestionStore());
    expect(result.current.totalAnswered).toEqual(0);
  });

  it("total answer should be increment on every call", () => {
    const { result } = renderHook(() => useQuestionStore());
    expect(result.current.totalAnswered).toEqual(0);

    act(() => result.current.updateTotalAnswered());
    expect(result.current.totalAnswered).toEqual(1);
    act(() => result.current.updateTotalAnswered());
    expect(result.current.totalAnswered).toEqual(2);
  });

  it("question index should be increment on every call", () => {
    const { result } = renderHook(() => useQuestionStore());
    expect(result.current.currentQuestionIndex).toEqual(0);

    act(() => result.current.updateCurrentQuestionIndex());
    expect(result.current.currentQuestionIndex).toEqual(1);
    act(() => result.current.updateCurrentQuestionIndex());
    expect(result.current.currentQuestionIndex).toEqual(2);
  });
});

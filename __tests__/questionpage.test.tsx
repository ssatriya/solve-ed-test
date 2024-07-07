import "jest-canvas-mock";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Navbar from "@/components/navbar";
import Questions from "@/app/questions/page";
import Passage from "@/components/passage";
import TabNavigation from "@/components/tab-navigation";
import QuestionContent from "@/components/question-content";

const passageText =
  "My name is Lisa. I wake up at 7 o'clock every morning. I take a shower and get dressed. Then, I have breakfast with my family. After that, I go to school. I study English and math. I have lunch at 12 o'clock. In the afternoon, I have art class. I go home at 4 o'clock. In the evening, I watch TV and do my homework. I go to bed at 9 o'clock.";

jest.mock("@/components/navbar", () => {
  return jest.fn(() => <div>Navbar</div>);
});
jest.mock("@/components/tab-navigation", () => {
  return jest.fn(() => (
    <div>
      <QuestionContent />
    </div>
  ));
});
jest.mock("@/components/question-content", () => {
  return jest.fn(() => (
    <div>
      QuestionContent
      <Passage passage={passageText} />
    </div>
  ));
});

jest.mock("@/components/passage", () => {
  return jest.fn(({ passage }) => <div>{passage}</div>);
});

describe("Question page", () => {
  it("should render the Questions component and call the necessary subcomponents", () => {
    render(<Questions />);

    expect(Navbar).toHaveBeenCalled();
    expect(TabNavigation).toHaveBeenCalled();
  });

  it("should display the passage text", () => {
    render(<TabNavigation />);

    const passageElement = screen.getByText(passageText);
    expect(passageElement).toBeInTheDocument();
  });
});

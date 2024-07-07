type QuestionDataType = {
  question: string;
  options: string[];
  answer: string;
  passage: string;
  passage_id: string;
};

export type QuestionType = {
  question_id: number;
  question_data: QuestionDataType;
};

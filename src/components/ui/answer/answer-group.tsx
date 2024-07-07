import { Stack } from "@mui/material";

import AnswerButton from "./answer-button";
import { QuestionType } from "../../../../types";

type Props = {
  options: QuestionType["question_data"]["options"];
  questionId: number;
};

const AnswerGroup = ({ options, questionId }: Props) => {
  return (
    <Stack
      spacing="18px"
      sx={{
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {options.map((option, index) => (
        <AnswerButton
          key={`${index}_${option}`}
          value={option}
          questionId={questionId}
        >
          {option}
        </AnswerButton>
      ))}
    </Stack>
  );
};

export default AnswerGroup;

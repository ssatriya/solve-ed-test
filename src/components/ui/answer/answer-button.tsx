import { ReactNode } from "react";
import Button from "@mui/material/Button";
import useQuestionStore from "@/store/question-store";

type Props = {
  children: ReactNode;
  value: string;
  questionId: number;
};

const AnswerButton = ({ children, value }: Props) => {
  const { addAnswer } = useQuestionStore();

  const clickHandler = () => {
    addAnswer({ answer: value });
  };

  return (
    <Button
      onClick={clickHandler}
      variant="outlined"
      sx={{
        fontSize: "15px",
        justifyContent: "start",
        color: "rgb(2, 136, 209)",
        fontWeight: 700,
        padding: "15px",
        borderRadius: "10px",
        border: "1px solid rgba(2, 136, 209, 0.5);",
        ":hover": {
          backgroundColor: "rgba(2, 136, 209, .1);",
        },
        textTransform: "capitalize",
      }}
    >
      {children}
    </Button>
  );
};

export default AnswerButton;

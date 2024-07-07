import { useEffect, useLayoutEffect } from "react";
import { Box, Typography } from "@mui/material";

import useQuestionStore from "@/store/question-store";
import Passage from "./passage";
import PaperCard from "./ui/paper-card";
import AnswerGroup from "./ui/answer/answer-group";
import CorrectAnswer from "./ui/answer/correct-answer";
import IncorrectAnswer from "./ui/answer/incorrect-answer";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{ position: "relative" }}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </Box>
  );
}

const QuestionContent = () => {
  const {
    userAnswer,
    isCorrect,
    tabIndex,
    questions,
    currentQuestionIndex,
    setIsCorrect,
  } = useQuestionStore();

  const {
    question_data: { passage, question, options, answer },
    question_id,
  } = questions[currentQuestionIndex];

  useEffect(() => {
    if (userAnswer && userAnswer === answer) {
      setIsCorrect(true);
    }
    if (userAnswer && userAnswer !== answer) {
      setIsCorrect(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnswer]);

  return (
    <>
      <CustomTabPanel value={tabIndex} index={0}>
        <Passage passage={passage} />
      </CustomTabPanel>
      <CustomTabPanel value={tabIndex} index={1}>
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{
              height: "150px",
              backgroundColor: "#d0e0f9",
              position: "fixed",
              width: "100%",
              top: 0,
              marginTop: "64px",
              paddingInline: "20px",
              paddingTop: "20px",
              paddingBottom: "35px",
            }}
          >
            <PaperCard
              sx={{
                minHeight: "100px",
                borderLeft: "3px solid #03a9f4",
                display: "flex",
                alignItems: "center",
                boxShadow: "none",
              }}
            >
              <Typography fontWeight={700}>{question}</Typography>
            </PaperCard>
          </Box>
          <Box
            sx={{
              paddingInline: "28px",
              width: "100%",
              position: "fixed",
              top: "250px",
            }}
          >
            {isCorrect === undefined && (
              <AnswerGroup options={options} questionId={question_id} />
            )}
            {isCorrect !== undefined && isCorrect && (
              <CorrectAnswer answer={answer} />
            )}
            {isCorrect !== undefined && !isCorrect && userAnswer && (
              <IncorrectAnswer answer={userAnswer} />
            )}
          </Box>
        </Box>
      </CustomTabPanel>
    </>
  );
};

export default QuestionContent;

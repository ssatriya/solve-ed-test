import Lottie from "lottie-react";
import { Box, Typography } from "@mui/material";

import corect from "@/utils/correct.json";
import CorrectButton from "./correct-button";
import PaperCard from "@/components/ui/paper-card";
import useQuestionStore from "@/store/question-store";

type Props = {
  answer: string;
};

const CorrectAnswer = ({ answer }: Props) => {
  const {
    updateCurrentQuestionIndex,
    currentQuestionIndex,
    resetQuestionIndex,
    updateTotalAnswered,
  } = useQuestionStore();

  const clickHandler = () => {
    if (currentQuestionIndex == 2) {
      resetQuestionIndex();
    } else {
      updateCurrentQuestionIndex();
      updateTotalAnswered();
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "990px",
        margin: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "124px",
      }}
    >
      <CorrectButton>{answer}</CorrectButton>
      <PaperCard>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "80px",
                width: "80px",
              }}
            >
              <Lottie animationData={corect} loop={true} />
            </Box>
            <Typography color="green" fontSize={24}>
              Amazing!
            </Typography>
          </Box>

          <Box
            sx={{
              width: "fit",
            }}
          >
            <CorrectButton onClick={clickHandler}>Continue</CorrectButton>
          </Box>
        </Box>
      </PaperCard>
    </Box>
  );
};

export default CorrectAnswer;

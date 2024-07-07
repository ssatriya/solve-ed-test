import Lottie from "lottie-react";
import { Box, Typography } from "@mui/material";

import incorect from "@/utils/incorrect.json";
import IncorrectButton from "./incorrect-button";
import PaperCard from "@/components/ui/paper-card";
import useQuestionStore from "@/store/question-store";
import { useRouter } from "next/navigation";

type Props = {
  answer: string;
};

const IncorrectAnswer = ({ answer }: Props) => {
  const router = useRouter();
  const {
    updateCurrentQuestionIndex,
    currentQuestionIndex,
    resetQuestionIndex,
    updateTotalAnswered,
    totalAnswered,
  } = useQuestionStore();

  const clickHandler = () => {
    if (currentQuestionIndex > 1) {
      resetQuestionIndex();
    } else {
      updateCurrentQuestionIndex();
      updateTotalAnswered();
    }
  };

  console.log(totalAnswered);

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
      <IncorrectButton>{answer}</IncorrectButton>
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
              <Lottie animationData={incorect} loop={true} />
            </Box>
            <Typography color="red" fontSize={24}>
              Try again!
            </Typography>
          </Box>
          <Box
            sx={{
              width: "fit",
            }}
          >
            <IncorrectButton onClick={clickHandler}>Continue</IncorrectButton>
          </Box>
        </Box>
      </PaperCard>
    </Box>
  );
};

export default IncorrectAnswer;

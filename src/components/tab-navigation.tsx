"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, Tab, Box, CircularProgress } from "@mui/material";
import { Description, QuestionAnswer } from "@mui/icons-material";

import { sleep } from "@/utils";
import QuestionContent from "./question-content";
import useQuestionStore from "@/store/question-store";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabNavigation = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { updateTabIndex, tabIndex, totalAnswered, totalQuestions } =
    useQuestionStore();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    updateTabIndex(newValue);
  };

  const isQuestionAvailable = totalAnswered == totalQuestions;

  useLayoutEffect(() => {
    if (totalAnswered > 0) {
      const afterEnd = async () => {
        if (isQuestionAvailable) {
          setIsLoading(true);
          await sleep(2000);
          setIsLoading(false);
          router.replace("/thank-you");
        }
      };
      afterEnd();
    }
  }, [isQuestionAvailable, router, totalAnswered]);

  return (
    <Box sx={{ width: "100%" }}>
      {!isQuestionAvailable && <QuestionContent />}
      {isQuestionAvailable && isLoading && (
        <Box
          sx={{
            display: "flex",
            position: "fixed",
            bottom: "50%",
            left: "50%",
            transform: "translate(-50%, 50%)",
          }}
        >
          <CircularProgress size={84} />
        </Box>
      )}
      <Box sx={{ borderColor: "divider", width: "100%" }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="question answer navigation"
          TabIndicatorProps={{
            sx: {
              top: 0,
              bottom: "auto",
              color: "rgb(255, 208, 24)",
              height: "5px",
            },
            style: {
              backgroundColor: "rgb(255, 208, 24)",
            },
          }}
          sx={{
            width: "100%",
            backgroundColor: "#222e3a",
            height: "72px",
          }}
          variant="fullWidth"
        >
          <Tab
            label="Passage"
            sx={{
              color: "white",
              height: "72px",
              fontWeight: "700",
              textTransform: "capitalize",
              fontSize: "16px",
            }}
            icon={<Description />}
            iconPosition="start"
            {...a11yProps(0)}
          />
          <Tab
            label="Questions"
            sx={{
              color: "white",
              height: "72px",
              fontWeight: "700",
              textTransform: "capitalize",
              fontSize: "16px",
            }}
            icon={<QuestionAnswer />}
            iconPosition="start"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabNavigation;

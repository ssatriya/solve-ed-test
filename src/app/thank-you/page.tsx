"use client";

import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";

import useQuestionStore from "@/store/question-store";

export default function ThankYou() {
  const { resetAnswers } = useQuestionStore();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
      }}
    >
      <Typography
        variant="h2"
        fontSize={32}
        fontWeight={700}
        color="rgb(76, 175, 80)"
      >
        Thank you
      </Typography>
      <Link
        href="/"
        onClick={() => {
          resetAnswers();
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(76, 175, 80)",
            textTransform: "none",
            fontWeight: "700",
            paddingX: "24px",
            ":hover": {
              backgroundColor: "rgb(61, 140, 64)",
            },
          }}
        >
          Back to Home
        </Button>
      </Link>
    </Box>
  );
}

"use client";

import { useState } from "react";
import { Box } from "@mui/material";

import InfoModal from "./ui/info-modal";
import ProgressBar from "./ui/progressbar";
import useQuestionStore from "@/store/question-store";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { totalAnswered } = useQuestionStore();

  const value = totalAnswered * 50;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "64px",
          background:
            "linear-gradient(101deg, #ffd946, #ffd018 23.96%, #fdbd1a)",
          paddingInline: {
            xs: "12px",
            md: "24px",
          },
          alignContent: "center",
          position: "relative",
        }}
      >
        <ProgressBar
          onClick={handleOpen}
          value={value}
          sx={{
            height: "20px",
            borderRadius: 10,
            backgroundColor: "white",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "rgb(76, 175, 80)",
              borderRadius: "40px",
            },
          }}
        />
      </Box>
      <InfoModal handleClose={handleClose} open={open} />
    </>
  );
};

export default Navbar;

import { Box, Slider, Typography, Paper } from "@mui/material";
import { FontDownloadOutlined } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import PaperCard from "./ui/paper-card";

type Props = {
  passage: string;
};

const Passage = ({ passage }: Props) => {
  const [fontSize, setFontSize] = useState(14);

  const sliderHandler = (e: Event, newValue: number | number[]) => {
    setFontSize(newValue as number);
  };

  return (
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
      <Box>
        <Box
          sx={{
            paddingInline: {
              md: "24px",
            },
            marginInline: {
              md: "26px",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <FontDownloadOutlined fontSize="small" />
          <Slider
            value={fontSize}
            aria-label="Default"
            valueLabelDisplay="off"
            onChange={sliderHandler}
            min={14}
            max={22}
            step={1}
            sx={{
              maxWidth: "1024px",
            }}
          />
          <FontDownloadOutlined fontSize="medium" />
        </Box>
        <Box
          sx={{
            paddingInline: {
              md: "24px",
            },
            marginInline: {
              md: "26px",
            },
            position: "relative",
          }}
        >
          <PaperCard
            sx={{
              position: "relative",
              top: "20px",
              overflowY: "auto",
              minHeight: "100px",
              borderTop: "3px solid #03a9f4",
            }}
          >
            <Typography paragraph fontSize={fontSize}>
              {passage}
            </Typography>
          </PaperCard>
        </Box>
      </Box>
    </Box>
  );
};

export default Passage;

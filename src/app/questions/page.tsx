"use client";

import { Box } from "@mui/material";

import Navbar from "@/components/navbar";
import TabNavigation from "@/components/tab-navigation";

export default function Questions() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Navbar />
      <TabNavigation />
    </Box>
  );
}
